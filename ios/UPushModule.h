#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

#define GT_DID_RECEIVE_REMOTE_NOTIFICATION @"GTDidReciveRemoteNotification"
#define GT_DID_CLICK_NOTIFICATION @"GTDidClickNotification"
#define GT_DID_REGISTE_CLIENTID @"GTDidRegisteClient"

@interface UPushModule : NSObject <RCTBridgeModule>

@end
