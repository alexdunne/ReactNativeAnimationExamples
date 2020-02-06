# React Native Animation Examples

A collection of animations rendered with React Native, using only JavaScript.

This repo will mostly be examples taken from sites like [Dribbble](https://dribbble.com/), and brought to life using React Native.

## Deployment

This app uses [fastlane](https://docs.fastlane.tools/) for deployment, it allows to perform easy and reproducable deployments straight from the command line.

To deploy the app use `yarn run android:deploy:[channel]` where `channel` is one of `alpha`, `beta`, or `release`. To deploy the app you'll need to `Google Play` store developer account and will also need a service account. Instructions for this can be found [here](https://docs.fastlane.tools/getting-started/android/setup/). When you download the `.json` file for your service account rename it to `google-play-android-developer-service-account.json` to place it in the project root directory.

When deploying the Android app you'll need to first increment the `versionCode` and the `versionName`.
