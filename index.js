import { NativeModules } from 'react-native';

const UMPushModule = NativeModules.UPushModule;

export default class Getui {


  /**
   * 初始化推送服务
   */
  static initPush() {
    UMPushModule.initPush();
  }

  /**
	 *  向个推服务器注册DeviceToken
	 *  备注：可以未启动SDK就调用该方法
	 *
	 *  @param deviceToken 推送时使用的deviceToken
	 *
	 */
  static registerDeviceToken(deviceToken) {
    UMPushModule.registerDeviceToken(deviceToken);
  }

  // 获取deviceToken
  static clientId(callback) {
    UMPushModule.getDeviceToken().then(result => {
      if (callback) {
        callback(result)
      }
    })
    // return new Promise((resolve, reject) => {
    //     UMPushModule.getDeviceToken().then(result => {
    //         if (result) {
    //             resolve(result);
    //         } else {
    //             reject(result);
    //         }
    //     });
    // });
  }

  // 添加标签
  static addTag(tag, cb) {
    UMPushModule.addTag(tag, (param) => {
      cb(param)
    });
  }

  // 删除标签
  static deleteTag(tag, cb) {
    UMPushModule.deleteTag(tag, (param) => {
      cb(param)
    });
  }

  // 获取所有标签
  static getTags(cb) {
    UMPushModule.listTag((param) => {
      cb(param)
    });
  }

  // 添加别名
  static addAlias(name, type, cb) {
    UMPushModule.addAlias(name, type, (param) => {
      cb(param)
    });
  }

  //
  static addExclusiveAlias(name, type, cb) {
    UMPushModule.addExclusiveAlias(name, type, (param) => {
      cb(param)
    });
  }

  // 删除别名
  static deleteAlias(name, type, cb) {
    UMPushModule.deleteTag(name, type, (param) => {
      cb(param)
    });
  }


