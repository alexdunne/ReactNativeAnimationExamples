# React Native Animation Examples

A collection of animations rendered with react-native using only JavaScript.

This repo will mostly be examples taken from sites liek dribbble.com to brought to life using react-native.

## Deployment

This app uses [fastlane](https://docs.fastlane.tools/) for deployment. Fastlane allows for easy and reproducable deployments from the command line.

To deploy the app use `yarn run android:deploy:[channel]` where `channel` is one of `alpha`, `beta`, or `release`. To deploy the app you'll need to `Google Play` store developer account and will also need a service account. Instructions for this can be found [here](https://docs.fastlane.tools/getting-started/android/setup/). When you download the `.json` file for your service account rename it to `google-play-android-developer-service-account.json` to place it in the project root directory.

When deploying the Android app you'll need to first increment the `versionCode` and the `versionName`.
