function applyEngSubjectName(subject) {
    let jpnTitle;
    switch (subject) {
        case "network":
            jpnTitle = "ネットワーク"
            break;
        case "csDigest":
            jpnTitle = "コンピュータシステム基礎"
            break;
        case "dataBase":
            jpnTitle = "データベース"
            break;
        case "webDesign":
            jpnTitle = "Webデザイン"
            break;
        case "algorithm":
            jpnTitle = "アルゴリズム"
            break;
        case "infoManage":
            jpnTitle = "情報化と経営"
            break;
        default:
            jpnTitle = "???"
            break;
    }
    return jpnTitle;
}