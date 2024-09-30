Feature('exploring');

Scenario('failAvtorization',  ({ I, login, loginData, cookies}) => {
    I.waitForURL('https://www.rusklimat.ru');
    cookies.closedVodal();
    I.wait(20);
    I.amOnPage('/personal');
    login.fillLogin(loginData.falseUser);
    I.see(login.errorMessage);
    pause()
});
