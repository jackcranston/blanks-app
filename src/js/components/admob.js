/*
 * Setup admob for in-app adverts
 */

export const admobSetup = () => {
  admob.setOptions({
    publisherId: "ca-app-pub-1387967171751864~5623198328",
    isTesting: true,
  });

  admob.createBannerView();

  admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP);
};
