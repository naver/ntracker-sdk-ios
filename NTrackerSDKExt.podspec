Pod::Spec.new do |spec|

  spec.name         = "NTrackerSDKExt"
  spec.version      = "2.0.1"
  spec.summary      = "NAVER App Tracking SDK"

  spec.ios.deployment_target = "13.0"

  spec.description  = "NAVER App Tracking SDK helps you collect app conversion events."

  spec.homepage     = "https://github.com/naver/ntracker-sdk-ios"

  spec.license    = { :type => "NAVERCORP", :file => "NAVER-COPYING" }

  spec.author       = { "Business Insight. NaverCorp" => "choi.hongseok@navercorp.com" }
  spec.source       = { :git => "https://github.com/naver/ntracker-sdk-ios.git", :tag => "#{spec.version}" }
  spec.vendored_frameworks = "NTrackerSDKExt.xcframework"
  spec.swift_version = "5.0"
end
