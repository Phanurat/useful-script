import("./ufs_global.js");

// communication between page-script and content-script
function sendToPageScript(event, uuid, data) {
  console.log("sendToPageScript", event, uuid, data);
  window.dispatchEvent(
    new CustomEvent("ufs-contentscript-sendto-pagescript", {
      detail: { event, uuid, data },
    })
  );
}

window.runScripts = runScripts;
function runScripts(scriptIds, event, path) {
  for (let scriptId of scriptIds) {
    runScript(scriptId, event);
  }
}

async function runScript(scriptId, event) {
  const script = (await import("/scripts/" + scriptId + ".js"))?.default;
  if (script && typeof script[event] === "function") {
    script[event]();
    console.log("> Run script (content-script): " + scriptId);
  }
}

(async () => {
  chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse
  ) {
    try {
      console.log("> Received message:", message);

      switch (message.type) {
        case "runScript":
          runScript(message.scriptId, "onClickContentScript");
          break;
      }
    } catch (e) {
      console.log("ERROR : ", e);
    }
  });

  // listen page script (web page, cannot listen iframes ...)
  window.addEventListener("ufs-pagescript-sendto-contentscript", async (e) => {
    let { event, data, uuid } = e?.detail || {};
    try {
      switch (event) {
        case "runInContentScript":
          const { params = [], fnPath = "" } = data || {};
          let fn = fnPath?.startsWith?.("chrome") ? chrome : window;
          fnPath.split(".").forEach((part) => {
            fn = fn?.[part] || fn;
          });
          console.log("runInContentScript", fnPath, params);
          sendToPageScript(event, uuid, await fn?.(...params));
          break;
        case "runInBackground":
          chrome.runtime.sendMessage(
            { action: "runInBackground", data },
            function (response) {
              console.log("Response from background script:", response);
              sendToPageScript(event, uuid, response);
            }
          );
          break;
      }
    } catch (e) {
      console.log("ERROR: ", e);
      sendToPageScript(event, uuid, null);
    }
  });
})();
