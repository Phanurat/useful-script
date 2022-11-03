import { allScripts } from "../../scripts/index.js";
import { t } from "./lang.js";

export const getTabId = async () => {
  let tabArray = await chrome.tabs.query({ currentWindow: true, active: true });
  return tabArray[0].id;
};

export const runScript = async (func, tabId) => {
  return chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: func,
    world: "MAIN",
  });
};

export const runScriptFile = (scriptFile, tabId) => {
  return chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: [scriptFile],
    world: "MAIN",
  });
};

export const runScriptInCurrentTab = async (func) => {
  const tabId = await getTabId();
  return await runScript(func, tabId);
};

export const runScriptFileInCurrentTab = async (scriptFile) => {
  const tabId = await getTabId();
  return await runScriptFile(scriptFile, tabId);
};

export const openUrlInNewTab = async (url) => {
  return chrome.tabs.create({ url });
};

export const openUrlAndRunScript = async (url, func) => {
  let tab = await openUrlInNewTab(url);
  return await runScript(func, tab.id);
};

export async function getCurrentURL() {
  let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  let url = tabs[0].url;
  return new URL(url);
}

export async function getAvailableScripts() {
  let hostname = (await getCurrentURL()).hostname;
  let avai = [];
  for (let script of Object.values(allScripts)) {
    if (await checkBlackWhiteList(script, false, hostname)) {
      avai.push(script);
    }
  }

  return avai;
}

export async function checkBlackWhiteList(
  script,
  willAlert = true,
  hostname = null
) {
  if (!hostname) {
    hostname = (await getCurrentURL()).hostname;
  }

  let hasWhiteList = script.whiteList?.length > 0;
  let hasBlackList = script.blackList?.length > 0;
  let inWhiteList = script.whiteList?.findIndex((_) => _ === hostname) >= 0;
  let inBlackList = script.blackList?.findIndex((_) => _ === hostname) >= 0;

  let willRun =
    (!hasWhiteList && !hasBlackList) ||
    (hasWhiteList && inWhiteList) ||
    (hasBlackList && !inBlackList);

  if (!willRun && willAlert) {
    const { whiteList: w, blackList: b } = script;
    alert(
      t({
        en:
          `Script not supported in current website: \n\n` +
          `${w?.length ? `+ Only run at:  ${w?.join(", ")}` : ""}\n` +
          `${b?.length ? `+ Not run at:  ${b?.join(", ")}` : ""}`,
        vi:
          `Script không hỗ trợ website hiện tại: \n\n` +
          `${w?.length ? `+ Chỉ chạy tại:  ${w?.join(", ")}` : ""}\n` +
          `${b?.length ? `+ Không chạy tại:  ${b?.join(", ")}` : ""}`,
      })
    );
  }

  return willRun;
}