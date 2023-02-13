// swift-tools-version: 5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "NTrackerSDKExt",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "NTrackerSDKExt",
            targets: ["NTrackerSDKExt"]),
    ],
    targets: [
        .binaryTarget(
            name: "NTrackerSDKExt",
            path: "./NTrackerSDKExt.xcframework"
        )
    ]
)
