chrome.action.onClicked.addListener(async tab => {
    const blob = await chrome.pageCapture.saveAsMHTML({
        tabId: tab.id
    });
    const content = await blob.text();
    const url = `data:application/x-mimearchive;base64,${btoa(content)}`;
    chrome.downloads.download({
        url,
        filename: 'webarchive.mhtml'
    });
});
