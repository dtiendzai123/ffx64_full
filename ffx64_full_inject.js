// Patch Free Fire Config via Shadowrocket MITM
let body = $response.body;

try {
    let json = JSON.parse(body);

    // Các key cần gán giá trị tùy chỉnh
    const customValues = {
        'com.act_conf_seclect_seclect_sync_setting"100"Key_acp_allow.file_code_unlock_connect_Dtps-setting_system_appdata&app_app_com.dts.freefireth_on_auto_cws': "70-100_on_uncrack.strings=true",
        'com.act_conf_seclect_seclect_sync_device"100"Key_act_allow.file_code_function_apnRevork_Exactly_feebase86_delay0.1_on_settime0.4_touchandhold_auto_cws': "70-100.uncrack.list=true",
        "com.accept_devices_Key_auto.setting": "70-100",
        "com.act_ffxbase64_Key_adt_allow.list": "10",
        "com.adt_xbaseff64_Key_act.list": "1440",
        "com.virtual-ffxbase42.accpt-feebase.list-virtualMouseDl-0,03.reroll-setting_accptDevice.dat": "60-100",
        'com.act_conf_seclect_sync_setting"100"Key_acp_allow.file_code_Dtps_com.dts.freefirethmax_auto_cws': "70-100_on.uncrack.strings=true",
        'com.acp_conf_seclect_sync_setting"100"Key_acp_allow.file_code_apncpss_com.dts.freefireth_auto_cws': "70-100_on.uncrack.list=true",
        'com.act_conf_seclect_sync_setting"100"Key_acp_allow.rick.file_code_apnrevork_ipssettinghexbase64_appdata_auto_cws': "70-100_on.uncrack.strings=true",
        'com.act_conf_seclect_sync_setting"100"Key_act_allow.rick.file_code_apnrevork_ipssettinghexbase64_appmaneger_auto_cws': "70-100_on.uncrack.list=true",
        'com.act_conf_seclect_sync_setting"100"Key_act_allow.file_code_connectInject_unlock_refreshratemax_set"120"_device_on_auto_cws': "70-100_on_uncrack.so=true",
        "com.act_conf_seclect.boostextreme_system_appdata&_app_com.dts.freefireth_on-set100_Key_act_allow.file_code_auto_cws": "70-100.uncrack.so=true",
        'com.act_conf_seclect_seclect_sync_device"100"Key_acp_allow.file_code_connectInject_boostextreme_setting-app_com.dts.freefireth_on_auto_cws': "70-100_on_uncrack.so=true",
        'com.act_conf_seclect_seclect_sync_setting"100"Key_acp_allow.file_code_connectInject-unlock_high-roll-stp_cpssbase64_on_auto_cws': "70-100.uncrack.list=true",
        'com.act_conf_seclect_seclect_sync_setting"100"Key_acp_allow.file_code_connectInject-unlock-boostmax-optizime-setting_appmanger_on_auto_cws': "70-100.uncrack.fzs=true",
        "com.accpt_WyI0IiwiM0l0SlRwQTFTSUNDcXNXQXhsdG8ra0ZmQUU5L0wrVGZRUUQrZ1lybSJd_allow.list": "70-120=true",
        "com.analytics_root_WyI0IiwiM0l0SlRwQTFTSUNDcXNXQXhsdG8ra0ZmQUU5L0wrVGZRUUQrZ1lybSJd_auto.cws": "70-100=true",
        "com.accept_devices_WyI0IiwiM0l0SlRwQTFTSUNDcXNXQXhsdG8ra0ZmQUU5L0wrVGZRUUQrZ1lybSJd_auto.setting": "70-100=true",
        "com.libsystem_pthread.dylib-Pre9M76X3pyLNQCUO6.select.on_allow.file.list": true,
        "acp_file_connected_freefireth-listextension": 1,
        "acp_freefireth-listextension": 1,
        "select_freefireth-listextension": 1,
        "act_code_injection_file_connected_freefireth-listextension": 1,
        "act_code_injection_freefireth-listextension": 1,
        "acp_file_connected_freefireth-listoftern": 1,
        "acp_freefireth-listoftern": 1,
        "act_code_connected_app_freefireth-listoftern": 1,
        "acp_file_connected_freefireth-listrollstp": 1,
        "acp_freefireth-listrollstp": 1,
        "act_injection_code_file_connected_freefireth-listdesgin-rover": 1,
        "acp_file_seclect_root_hide_sysn_auto_dat": 1,
        "conf_idelay": 1,
        "unlockernel_click": 1,
        "const_udelay": 1,
        "com.unlockplatform_driverxbase64": 1
    };

    // Các key cần set = true
    const keysTrue = [
        "com.ss-ffx64.aps", "com.gamsrollm.list", "com.analytics-sys.ips", "com.maxpointer.inject.ips",
        "com.monaihd.inject.ips", "com.nq-settingaccpt.data", "com.fn-settingaccpt.list",
        "com.sx-ffbasex64-prefer.data", "com.high_effect_device.target_lockffbasse64_sellect.on.allow.file",
        "com-ve-hhighc-ffbase64-plist", "com-ve-hhighc-ffbase32-plist", "com-ur-settingaccpt-prefer.plist",
        "com-ur-system-prefer.data", "com.itfz-ffx32base.list", "com.jsonaxbaseffx64.data", "com.fullaccesspointer.dat",
        "com.lockuni-ffx64.dat", "com.rightup.setting.list", "com.lockini-ffbasex64", "com.inirrate-ffbasex64",
        "com.setup-lockbase.dat", "com.lockr-ffx64base", "com.-bz-prefer-apn", "com.setting-vx-ffbase64-zip",
        "com.exten-ffbasex64", "freebase.com.ffx64base", "com.regcl-ffbasex32", "com.highperformance.ffbasex64",
        "com.khfile-ffbasex64", "cwom.vr-device-delay-prefer.apn", "com.uc-setting-device.plist",
        "com-vg-hhighc-prefer-ffbasex64.zip", "com.vg-lockr-ffbase64", "com.vg-prefer-ffbasex64z.zip",
        "com.av-hhighc.data", "com.lockl-ffx64base", "com.leftup.setting.list", "com.lockinix64-ffbasex64",
        "com.br-lockup-prefer.zip", "com.bzh-lockdown-prefer.dat", "com.fixrecoil-ffbase64",
        "com.lockregcl-ffbase64.apn", "com-libdispatch.dylib-n0iFEP", "com.Adt-actGonffbase64.dat",
        "com.2C6B-4048GB.setting", "com.A03C-1108USJBxbase64.setting", "com.lockui.systemxbase64.plist",
        "com.infordevice.systemppi-500-on.zip", "com.infordevice.systemppi-500-onxffbase64-apk",
        "com.ppi-unlocksystem/400ppi-on-prefer.android/os", "com.lockleft/ui/os-high/on.high.android",
        "com.unlock-lockhead-on-prefer/android-os", "com.flextouchdelay3d.android/os",
        "com.syystemunlockppi400-on.ffbase64.apn", "com.unlocktouchdelaymedium.on/android/os",
        "com.profileunlocktouchdelay.on-zip", "com.infordevicelockreg/high.on_sever_DAMQ-RQMD_APN_FODER",
        "com.ppi-unlocksystem/400ppi.on-prefer_sever_DAMQ-RQMD_EXP", "com.roms-ffx64base.dat",
        "com.ram-ffx64base.dat", "com.settinguptm.list", "com.writecurently-ffx64base.oss",
        "com.ext-allyacc.fzs", "com.rv-settingaccpt-prefer.ips", "com.system-uv-touchdelay-0.ips",
        "com.uu.sentov-ffbase64-prefer.list", "com.uu.sentov-ffbase32-prefer.list", "fae_ffxbase64_DOMAIN-FULL_hyper.roll",
        "rog.theme_ffxbase63_HKEY-USER-ROGL-PKIN_ptspd.list", "com.siop.ips"
    ];
const FreeFireSystemInjection = {
HyperHeadLockSystem: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileDragging: true,
        stickiness: "hyper",
        snapToleranceAngle: 0.0,
        disableBodyRecenter: true,
        trackingSpeed: 10.0,
        smoothing: 0.0,
        maxDragDistance: 0.0,
        snapBackToHead: true,
        predictionFactor: 1.5,
        autoFireOnLock: true,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    StableHeadLockSystem: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileDragging: true,
        stickiness: "extreme",
        snapToleranceAngle: 0.0,
        disableBodyRecenter: true,
        trackingSpeed: 5.0,
        smoothing: 0.0,
        maxDragDistance: 0.0,
        snapBackToHead: true,
        predictionFactor: 1.2,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    TouchBoostPrecisionSystem: {
        enabled: true,
        precisionMode: true,
        boostOnTouch: true,
        boostOnDrag: true,
        boostOnFire: true,
        baseSensitivity: 10.0,
        boostMultiplier: 20.0,
        precisionDragMultiplier: 0.0,
        boostRampUpTime: 0.0,
        boostDecayTime: 0.0,
        microDragPrecision: 0.0,
        microDragMultiplier: 1.0,
        tapDistanceThreshold: 0.0,
        microAdjustThreshold: 0.0,
        microAdjustSmoothing: 1.0,
        latencyCompensation: true,
        latencyMs: -30,
        overshootProtection: true,
        overshootLimit: 0.0,
        debugLog: false
    },

    InstantDragToBoneHead: {
        enabled: true,
        targetBone: "bone_Head",
        snapOnDragStart: true,
        holdLockWhileDragging: true,
        maxSnapDistance: 0.01,
        trackingSpeed: 2.0,
        smoothing: 0.0,
        snapToleranceAngle: 0.0,
        disableBodyRecenter: true,
        predictionFactor: 1.0,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    PointerSpeedBoost: { pointerSpeedBoost: 9, confPointerTiming: 1, selectPointerSpeedRoot9: 1 },
    PPIInjection: { ppiOverride: 550, selectPPIInfo: 1 },
    DPIInjection: { dpiPointer: 10000 },

    AimHeadLock: {
        aimBone: "bone_Head",
        autoLock: true,
        lockInjection: true,
        lockStrength: "maximum",
        snapBias: 1.0,
        trackingSpeed: 1.0,
        dragCorrectionSpeed: 5.0,
        snapToleranceAngle: 1.5,
        maxLockAngle: 360,
        stickiness: "high",
        headStickPriority: true,
        headLockPriority: true,
        disableBodyRecenter: true,
        minDistanceToLock: 0.0,
        boneHead_position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        boneHead_rotation: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        boneHead_scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoAimLockHeadOnFire_StableDrag: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileFiring: true,
        dragSmoothFactor: 0.85,
        maxDragDistance: 0.02,
        snapBackToHead: true,
        trackingSpeed: 1.5,
        predictionFactor: 0.9,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        disableBodyRecenter: true,
        smoothing: 1.0,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AimNeckLock: {
        aimTrackingBone: "bone_Neck",
        autoLock: true,
        lockStrength: "maximum",
        snapBias: 1.0,
        trackingSpeed: 1.0,
        dragCorrectionSpeed: 4.8,
        snapToleranceAngle: 0.0,
        maxLockAngle: 360,
        stickiness: "high",
        neckStickPriority: true,
        boneNeck_position: { x: -0.128512, y: 0.0, z: 0.0 },
        boneNeck_rotation: { x: -0.012738, y: -0.002122, z: 0.164307, w: 0.986325 },
        boneNeck_scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AntiRecoilAimStabilizer: {
        enabled: true,
        targetBone: "bone_Head",
        autoCompensateRecoil: true,
        compensationStrength: 0.95,
        smoothFactor: 0.9,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        applyWhileFiring: true,
        predictionFactor: 0.0,
       adaptToWeapon: true,    
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoAimHeadOnFire: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        trackingSpeed: 1.5,
        predictionFactor: 0.9,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        headLockPriority: true,
        disableBodyRecenter: true,
        fireHoldLock: true,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    HoldCrosshairOnHeadWhenFire: {
        enabled: true,
        targetBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileFiring: true,
        trackingSpeed: 1.5,
        predictionFactor: 0.00001,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        disableBodyRecenter: true,
        smoothing: 0.85,
        boneOffsetHoldCrosshairOnHeadWhenFire: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffsetHoldCrosshairOnHeadWhenFire: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    StableDragLockHead: {
        enabled: true,
        targetBone: "bone_Head",
        dragSmoothFactor: 0.85,
        maxDragDistance: 0.02,
        snapBackToHead: true,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        headLockPriority: true,
        predictionFactor: 0.0,
        boneOffsetStableDragLockHead: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffsetStableDragLockHead: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoTrackingLock: {
        enabled: true,
        trackingBone: "bone_Head",
        autoSwitchToNeck: true,
        trackingSpeed: 10.0,
        predictionFactor: 0.0001,
        snapToleranceAngle: 0.0,
        maxLockDistance: 200.0,
        stickiness: "extreme",
        ignoreObstacles: true,
        recenterDelay: 0,
        boneOffsetAutoTrackingLock: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffsetAutoTrackingLock: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoShotHead: { autoHeadshot: true, aimListextension: true },
    FixLagBoost: { fixResourceTask: true },
    CloseLauncherRestore: { closeLauncher: true, forceRestore: true }
};
// ===============================
// Auto Head Lock Module (All-in-One Const)
// ===============================

// ===============================
// Free Fire Auto Head Lock Engine (All-in-One)
// ===============================

const FreeFireAutoHeadLockModule = (() => {

  // ===== Vector3 =====
  class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
      this.x = x; this.y = y; this.z = z;
    }
    subtract(v) { return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z); }
    magnitude() { return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z); }
    normalize() {
      let mag = this.magnitude();
      return mag === 0 ? new Vector3(0,0,0) : new Vector3(this.x/mag, this.y/mag, this.z/mag);
    }
  }

  // ===== Kalman Filter =====
  class KalmanFilter {
    constructor(r = 0.01, q = 0.1) {
      this.r = r; this.q = q;
      this.p = 1; this.x = 0; this.k = 0;
    }
    filter(value) {
      this.p += this.q;
      this.k = this.p / (this.p + this.r);
      this.x += this.k * (value - this.x);
      this.p *= (1 - this.k);
      return this.x;
    }
  }

  // ===== Race Config (BaseMale) =====
  const RaceConfig = {
    raceName: "BaseMale",
    headBone: "bone_Head",
    bodyBones: ["bone_Chest", "bone_Spine", "bone_Legs", "bone_Feet"],
    sensitivity: 9999.0,
    height: 2.0,
    radius: 0.25,
    mass: 50.0
  };
    const AimSystem = {
    getBonePos(enemy, bone) {
      if (!enemy || !enemy.bones) return new Vector3();
      return enemy.bones[bone] || new Vector3();
    },

    lockToHead(player, enemy) {
      let head = this.getBonePos(enemy, RaceConfig.headBone);
      let dir = head.subtract(player.position).normalize();

      player.crosshairDir = dir;
      console.log(`🎯 Auto Locked to ${RaceConfig.headBone}`);
    },

    applyRecoilFix(player) {
      let fix = 0.1;
      player.crosshairDir = player.crosshairDir.add(new Vector3(0, -fix, 0)).normalize();
      console.log(`🔧 Recoil fixed with strength ${fix}`);
    },

    adjustDrag(player, targetBone = "body") {
      let sens = 1.0;
      if (targetBone === "head") sens *= 2.0;
      if (targetBone === "body") sens *= 1.3;

      player.dragForce = sens;
      console.log(`⚡ Drag sensitivity adjusted (${targetBone}) → ${sens}`);
    }
  };

  // ===== Auto Head Lock =====
  class AutoHeadLock {
    constructor() {
      this.kalmanX = new KalmanFilter();
      this.kalmanY = new KalmanFilter();
      this.kalmanZ = new KalmanFilter();
    }
    getBone(enemy, boneName) {
      if (!enemy || !enemy.bones) return new Vector3();
      return enemy.bones[boneName] || new Vector3();
    }
    detectClosestBone(player, enemy) {
      let minDist = Infinity, closest = null;
      for (let bone of [RaceConfig.headBone, ...RaceConfig.bodyBones]) {
        let pos = this.getBone(enemy, bone);
        let dist = pos.subtract(player.position).magnitude();
        if (dist < minDist) { minDist = dist; closest = bone; }
      }
      return closest;
    }
    lockCrosshair(player, enemy) {
      if (!enemy) return;
      let targetBone = this.detectClosestBone(player, enemy);
      if (targetBone !== RaceConfig.headBone && Math.random() < RaceConfig.sensitivity) {
        targetBone = RaceConfig.headBone;
      }
      let bonePos = this.getBone(enemy, targetBone);
      let dir = bonePos.subtract(player.position).normalize();
      dir.x = this.kalmanX.filter(dir.x);
      dir.y = this.kalmanY.filter(dir.y);
      dir.z = this.kalmanZ.filter(dir.z);
      player.crosshairDir = dir;
      console.log(`🎯 Locked to ${targetBone} of ${RaceConfig.raceName}`);
    }
  }

  // ===== Free Fire Config =====
 const FreeFireConfig = {
  start: { locale: true, runsFromHomeScreen: 16 },
  screenResolution: { default: { width: 1840, height: 1080 }, current: { width: 2400, height: 1440 } },
  runsFromHomeScreen: config.runsFromHomeScreen,
  localname: "freefire",
  version: 67,
  complete: true,
  size: { width: 0, height: 0 },
  text: "",
  freefireResolution: { width: 1840, height: 1080 },
  paste: 0,
  hs: 1,
  aimbot: 1,

  dragToHead: { enabled: true, sensitivity: 9999.0, distanceScaling: true, snapSpeed: 9999.0, lockBone: "Head" },
  autoAimOnFire: {
  enabled: true,
  snapForce: 9999.0 // từ 0.0 → 1.0 (0.8 nghĩa là aim khá nhanh)
},
  autoHeadLock: { enabled: true, lockOnFire: true, holdWhileMoving: true, trackingSpeed: 9999.0, prediction: true, lockBone: "Head" },
  dragClamp: { enabled: true, maxOffset: 0.0, enforceSmooth: true },
  perfectHeadshot: { enabled: true, overrideSpread: true, hitBone: "Head", prediction: true, priority: "head" },
  hipSnapToHead: { enabled: true, instant: true, hipZone: "Hip", targetBone: "Head", snapForce: 9999.0 },
  stabilizer: { enabled: true, antiRecoil: true, antiShake: true, lockSmooth: true, correctionForce: 0.0, stabilizeSpeed: 9999.0 },
  forceHeadLock: { enabled: true, snapStrength: 9999.0 },  // ép thẳng tâm vào đầu
aimSensitivity: { 
    enabled: true, 
    base: 9999.0,         // độ nhạy mặc định
    closeRange: 9999.0,   // độ nhạy khi địch gần
    longRange: 9999.0,    // độ nhạy khi địch xa
    lockBoost: 9999.0,    // tăng nhạy khi đang lock
    distanceScale: true
  }
};


  // ===== Crosshair Lock Engine =====
  function lockCrosshairIfOnHead(playerPos, headPos, threshold = 0.000001) {
    let dx = playerPos.x - headPos.x, dy = playerPos.y - headPos.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    if (dist <= threshold) {
      playerPos.x = headPos.x; playerPos.y = headPos.y;
      console.log("🔒 Crosshair LOCKED on head:", playerPos);
    }
    return playerPos;
  }

  function clampCrosshairToHead(crosshair, headPos) {
    if (!FreeFireConfig.forceHeadLock.enabled) return crosshair;
    console.log("🔒 Crosshair clamped to head:", headPos);
    return { ...headPos };
  }

  // ===== Aim Sensitivity =====
  function getAimSensitivity(player, target) {
    if (!FreeFireConfig.aimSensitivity.enabled) return FreeFireConfig.aimSensitivity.base;
    let dx = target.x - player.x, dy = target.y - player.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    let sens = FreeFireConfig.aimSensitivity.base;
    if (FreeFireConfig.aimSensitivity.distanceScale) {
      if (distance < 0.00001) sens = FreeFireConfig.aimSensitivity.closeRange;
      else if (distance > 0.5) sens = FreeFireConfig.aimSensitivity.longRange;
    }
    sens *= FreeFireConfig.aimSensitivity.lockBoost;
    console.log("⚙ Sens:", sens.toFixed(2), "dist:", distance.toFixed(3));
    return sens;
  }

  // ===== Aim Engine =====
  function runAimEngine(playerPos, enemyBones, isFiring = true) {
    let target = { ...enemyBones.head };

    if (FreeFireConfig.hipSnapToHead.enabled) {
      let aimAtHip = Math.abs(playerPos.x - enemyBones.hip.x) < 0.05 &&
                     Math.abs(playerPos.y - enemyBones.hip.y) < 0.05;
      if (aimAtHip && FreeFireConfig.hipSnapToHead.instant) {
        target = { ...enemyBones.head };
      }
    }

    if (FreeFireConfig.autoAimOnFire.enabled && isFiring) {
      playerPos.x += (enemyBones.head.x - playerPos.x) * FreeFireConfig.autoAimOnFire.snapForce;
      playerPos.y += (enemyBones.head.y - playerPos.y) * FreeFireConfig.autoAimOnFire.snapForce;
      console.log("🔫 Auto AIM HEAD:", playerPos);
    }

    if (FreeFireConfig.perfectHeadshot.enabled && FreeFireConfig.perfectHeadshot.prediction) {
      target.x += 0.00001; target.y += 0.00001;
    }

    if (FreeFireConfig.stabilizer.enabled && FreeFireConfig.stabilizer.antiShake) {
      target.x = parseFloat(target.x.toFixed(4));
      target.y = parseFloat(target.y.toFixed(4));
    }

    target = clampCrosshairToHead(target, enemyBones.head);
    let sens = getAimSensitivity(playerPos, target);
    playerPos.x += (target.x - playerPos.x) * 0.2 * sens;
    playerPos.y += (target.y - playerPos.y) * 0.2 * sens;
    playerPos = lockCrosshairIfOnHead(playerPos, enemyBones.head);
    return playerPos;
  }

  // ===== Multi-Enemy Selector =====
  function selectClosestEnemy(player, enemies) {
    let best = null, bestDist = Infinity;
    for (let e of enemies) {
      let dx = e.head.x - player.x, dy = e.head.y - player.y;
      let dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < bestDist) { bestDist = dist; best = e; }
    }
    return best;
// ===== Aimlock Loop (async) =====
async function startAimlock() {
  let player = { x: 0, y: 0, position: new Vector3(0,0,0), crosshairDir: new Vector3(), dragForce: 9999.0 };

  // Sửa cấu trúc enemies: bỏ thừa "head: { head: {...}}"
  let enemies = [
    { head: { x: -0.0456970781, y: -0.004478302 }, hip: { x: -0.05334, y: -0.003515 } },
    { head: { x: -0.0456970781, y: -0.004478302 }, hip: { x: -0.05334, y: -0.003515 } }
  ];

  console.log("🚀 AIMLOCK running...");
  while (true) {
    let enemy = selectClosestEnemy(player, enemies);
    if (enemy) player = runAimEngine(player, enemy);
    await new Promise(r => setTimeout(r, 50));
  }
}

  // Xuất public API
    return {
    Vector3: Vector3,
    KalmanFilter: KalmanFilter,
    AutoHeadLock: AutoHeadLock,
    RaceConfig: RaceConfig,
    FreeFireConfig: FreeFireConfig,
    AimSystem: AimSystem,
    runAimEngine: runAimEngine,
    selectClosestEnemy: selectClosestEnemy,
    startAimlock: startAimlock
  };

})(); 

// chạy
FreeFireAutoHeadLockModule.startAimlock();
    const AIMBOT_SYSTEM = (() => {
    
    // ===============================
    // AIMBOT MOBILE - CORE STRUCTURE
    // ===============================

    class Vector3 {
        constructor(x=0, y=0, z=0) {
            this.x = x; this.y = y; this.z = z;
        }
        subtract(v) { return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z); }
        add(v) { return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z); }
        length() { return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z); }
        normalize() {
            const l = this.length() || 1;
            return new Vector3(this.x/l, this.y/l, this.z/l);
        }
    }

    class TargetDetector {
        constructor() {
            this.targets = [];
        }

        detectEnemies(frameData) {
            this.targets = frameData.enemies || [];
            return this.targets;
        }

        getClosestTarget(playerPos) {
            let bestTarget = null;
            let bestDist = Infinity;
            for (let t of this.targets) {
                const dist = playerPos.subtract(new Vector3(t.x, t.y, t.z)).length();
                if (dist < bestDist) {
                    bestDist = dist;
                    bestTarget = t;
                }
            }
            return bestTarget;
        }
    }

    class PositionCalculator {
    static calculateAimPoint(player, target) {
        if (!target) return null;

        // lấy boneOffset từ target (nếu có), fallback về 0
        const boneOffset = target.boneOffset 
            ? new Vector3(target.boneOffset.x, target.boneOffset.y, target.boneOffset.z) 
            : new Vector3(0, 0.25, 0);

        return new Vector3(
            target.x + boneOffset.x,
            target.y + boneOffset.y,
            target.z + boneOffset.z
        );
    }
}

    class ScreenController {
        static aimAt(aimPoint, screenCenter, sensitivity=1.0) {
            if (!aimPoint) return null;
            const dx = (aimPoint.x - screenCenter.x) * sensitivity;
            const dy = (aimPoint.y - screenCenter.y) * sensitivity;
            return { action: "drag", moveX: dx, moveY: dy };
        }
    }

    const CONFIG = {
        enabled: true,
        trackingSpeed: 10.0,
        predictionFactor: 0.0,
        sensitivity: 9999.0,
        maxDistance: 9999.0,
        stickiness: "strong"
    };

    class Engine {
        constructor() {
            this.detector = new TargetDetector();
            this.playerPos = new Vector3(0,0,0);
            this.screenCenter = new Vector3(0.5, 0.5, 0);
        }

        update(frameData) {
            if (!CONFIG.enabled) return null;
            const enemies = this.detector.detectEnemies(frameData);
            const target = this.detector.getClosestTarget(this.playerPos);
            const aimPoint = PositionCalculator.calculateAimPoint(this.playerPos, target);
            return ScreenController.aimAt(aimPoint, this.screenCenter, CONFIG.sensitivity);
        }
    }

    return {
        Vector3,
        TargetDetector,
        PositionCalculator,
        ScreenController,
        CONFIG,
        Engine
    };
})();

// ===============================
// GIẢ LẬP VÒNG LẶP
// ===============================
const engine = new AIMBOT_SYSTEM.Engine();
const frameData = {
    enemies: [
        { 
            x: 0, y: 1.7, z: 0,
            boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 } // offset head
        },
        { 
            x: 0, y: 1.7, z: 0,
            boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 } // offset head mặc định
        }
    ]
};
const action = engine.update(frameData);
console.log("[Aimbot Output]", action);
    // ==========================
// AIMLOCK SYSTEM (MOBILE)
// ==========================

const AimLockSystem = {
  // ==========================
  // 0. Config
  // ==========================
  config: {
    sensitivity: 9999.0,         // Độ nhạy kéo tâm
    lockSpeed: 2.0,              // Tốc độ hút tâm (0 = chậm, 1 = tức thì)
    prediction: true,            // Bật dự đoán chuyển động
    tracking: true,              // Theo dõi liên tục
    fov: 360,                    // Góc nhìn để aim
    autoFire: false,             // Tự động bắn khi lock trúng
    priority: "nearest",         // nearest | lowestHP | first
    boneOffset: { x: 0, y: 0.05, z: 0 } // Dịch lên đầu (head clamp)
  },

  // ==========================
  // 1. Phát hiện mục tiêu
  // ==========================
  detectTarget(enemies, playerPos) {
    return enemies
      .filter(e => e.isVisible && e.health > 0)
      .sort((a, b) => {
        if (this.config.priority === "nearest") {
          return this.distance(playerPos, a.position) - this.distance(playerPos, b.position)
        } else if (this.config.priority === "lowestHP") {
          return a.health - b.health
        } else {
          return 0
        }
      })
  },

  // ==========================
  // 2. Khóa mục tiêu (Lock-On)
  // ==========================
  lockTarget(target) {
    if (!target) return
    let pos = this.applyHeadClamp(target.position)
    this.aimlockScreenTap(pos)
  },

  // ==========================
  // 3. Tracking (Theo dõi liên tục)
  // ==========================
  updateTargetPosition(target) {
    if (!target) return
    let predicted = this.config.prediction ? this.predictPosition(target) : target.position
    let clamped = this.applyHeadClamp(predicted)
    this.aimlockScreenTap(clamped)
  },

  // ==========================
  // 4. Prediction (dự đoán di chuyển)
  // ==========================
  predictPosition(target) {
    let velocity = target.velocity || {x:0,y:0,z:0}
    return {
      x: target.position.x + velocity.x * 0.1,
      y: target.position.y + velocity.y * 0.1,
      z: target.position.z + velocity.z * 0.1
    }
  },

  // ==========================
  // 5. Clamp vào Head Bone
  // ==========================
  applyHeadClamp(pos) {
    return {
      x: pos.x + this.config.boneOffset.x,
      y: pos.y + this.config.boneOffset.y,
      z: pos.z + this.config.boneOffset.z
    }
  },

  // ==========================
  // 6. Điều khiển chạm màn hình
  // ==========================
  aimlockScreenTap(screenPos) {
    console.log("Crosshair moving to:", screenPos)
  },

  // ==========================
  // 7. Vòng lặp chính Aimlock
  // ==========================
  aimlockLoop(enemies, player) {
    let targets = this.detectTarget(enemies, player.position)
    if (targets.length > 0) {
      let mainTarget = targets[0]

      // Khóa cứng vào head
      this.lockTarget(mainTarget)

      // Theo dõi liên tục
      if (this.config.tracking) {
        this.updateTargetPosition(mainTarget)
      }

      // Auto fire nếu bật
      if (this.config.autoFire) {
        console.log("Auto firing at target!")
      }
    }
  },

  // ==========================
  // Helper: Tính khoảng cách
  // ==========================
  distance(a, b) {
    return Math.sqrt(
      (a.x - b.x) ** 2 +
      (a.y - b.y) ** 2 +
      (a.z - b.z) ** 2
    )
  }
}


// =======================
// AIMNECK CONFIG MODULE
// =======================
const AimNeckConfig = {
  name: "AimNeckSystem",
  enabled: true,

  config: {
    sensitivity: 9999.0,         // Độ nhạy di chuyển tâm
    lockSpeed: 0.95,             // Tốc độ hút tâm (1 = tức thì)
    prediction: true,            // Bật dự đoán vị trí cổ
    tracking: true,              // Theo dõi liên tục
    fov: 360,                    // Góc quét tìm mục tiêu
    autoFire: false,             // Bắn tự động khi lock
    aimBone: "bone_Neck",        // Vùng cổ mặc định
    headAssist: true,            // Nếu kéo lên trên, auto hút vào đầu
    screenTapEnabled: true,      // Điều khiển chạm màn hình
    clamp: { minY: 0, maxY: 0 }, // Giới hạn lock (không vượt quá đầu)

    // Thêm offset để dễ chỉnh từ cổ sang đầu
    boneOffset: { x: 0, y: 0.22, z: 0 } 
  },

  // 1. Phát hiện vị trí cổ
  detectNeckTarget(enemies) {
    return enemies.filter(e => e.isVisible && e.health > 0)
                  .map(e => ({ 
                     enemy: e, 
                     neckPos: this.getBonePosition(e, this.config.aimBone) 
                  }))
  },

  // Giả lập lấy vị trí bone cổ từ nhân vật
  getBonePosition(enemy, bone) {
    let base = enemy.bones && enemy.bones[bone] ? enemy.bones[bone] : enemy.position
    // Áp dụng offset để dễ kéo sang đầu
    return {
      x: base.x + this.config.boneOffset.x,
      y: base.y + this.config.boneOffset.y,
      z: base.z + this.config.boneOffset.z
    }
  },

  // 2. Prediction: dự đoán di chuyển cổ
  predictNeckPosition(target) {
    let velocity = target.enemy.velocity || {x:0,y:0,z:0}
    return {
      x: target.neckPos.x + velocity.x * 0.1,
      y: target.neckPos.y + velocity.y * 0.1,
      z: target.neckPos.z + velocity.z * 0.1
    }
  },

  // 3. Tính toán hướng để nhắm cổ
  calculateAimDirection(playerPos, targetPos) {
    return {
      x: targetPos.x - playerPos.x,
      y: targetPos.y - playerPos.y,
      z: targetPos.z - playerPos.z
    }
  },

  // 4. Điều khiển drag/tap màn hình
  screenTapTo(targetPos) {
    if (this.config.screenTapEnabled) {
      console.log("Screen tap/drag tới:", targetPos)
    }
  },

  // Áp dụng aimlock (dịch chuyển crosshair)
  applyAimLock(direction) {
    console.log("AimLock hướng tới:", direction)
  },

  // 5. Aimneck Loop
  run(player, enemies) {
    if (!this.enabled) return
    let targets = this.detectNeckTarget(enemies)
    if (targets.length === 0) return

    let target = targets[0]
    let lockPos = this.config.prediction ? this.predictNeckPosition(target) : target.neckPos
    
    let dir = this.calculateAimDirection(player.position, lockPos)

    // Giới hạn: không vượt quá đầu
    if (this.config.headAssist) {
      if (dir.y > this.config.clamp.maxY) dir.y = this.config.clamp.maxY
      if (dir.y < this.config.clamp.minY) dir.y = this.config.clamp.minY
    }

    this.applyAimLock(dir)
    this.screenTapTo(lockPos)
  }
}
   
    const FeatherDragHeadLock = {
    enabled: true,
    headBone: "bone_Head",

    sensitivityBoost: 99999.0,   // drag siêu nhẹ (càng cao càng nhạy)
    smoothFactor: 0.3,      // tốc độ hút về đầu (0.1 = chậm, 0.3 = nhanh)
    snapThreshold: 0.002,     // khoảng cách auto hút hẳn vào đầu
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    apply: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);

        // vector chênh lệch
        let dx = headPos.x - aimPos.x;
        let dy = headPos.y - aimPos.y;
        let dz = headPos.z - aimPos.z;
        let dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

        // Nếu crosshair lọt vào vùng snap → lock thẳng vào đầu
        if (dist < this.snapThreshold) {
            player.crosshair.position = { ...headPos };
            player.crosshair.lockedBone = this.headBone;
            console.log(`[FeatherDragHeadLock] 🎯 LOCK thẳng vào ${this.headBone}`);
            return;
        }

        // Luôn kéo crosshair nhẹ nhàng hướng về đầu
        player.crosshair.position = {
            x: aimPos.x + dx * this.smoothFactor * this.sensitivityBoost,
            y: aimPos.y + dy * this.smoothFactor * this.sensitivityBoost,
            z: aimPos.z + dz * this.smoothFactor * this.sensitivityBoost
        };

        console.log(`[FeatherDragHeadLock] ✨ Auto hút về ${this.headBone}, dist=${dist.toFixed(3)}`);
    }
};

// vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && FeatherDragHeadLock.enabled) {
        FeatherDragHeadLock.apply(localPlayer, HeadLockAim.currentTarget);
    }
});
    const NoOverHeadDrag = {
    enabled: true,
    headBone: "bone_Head",
    clampYOffset: 0.0,   // cho phép cao hơn đầu bao nhiêu (0 = tuyệt đối không vượt)
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    apply: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);

        // Nếu y của crosshair cao hơn đầu
        if (aimPos.y > headPos.y + this.clampYOffset) {
            player.crosshair.position = {
                x: aimPos.x,                // giữ X (ngang)
                y: headPos.y + this.clampYOffset, // ghim trần Y tại đầu
                z: aimPos.z                 // giữ Z (sâu)
            };

            console.log(`[NoOverHeadDrag] ⛔ Giới hạn drag, crosshair không vượt quá ${this.headBone}`);
        }
    }
};

// Vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && NoOverHeadDrag.enabled) {
        NoOverHeadDrag.apply(localPlayer, HeadLockAim.currentTarget);
    }
});
    const DragHeadLockStabilizer = {
    enabled: true,
    headBone: "bone_Head",
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    lockZone: {
        toleranceX: 0.0,   // độ lệch ngang cho phép khi drag
        toleranceY: 0.0    // độ lệch dọc cho phép khi drag
    },

    stabilize: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);

        let dx = Math.abs(aimPos.x - headPos.x);
        let dy = Math.abs(aimPos.y - headPos.y);

        // Debug log
        console.log(`[DragHeadLockStabilizer] dx=${dx.toFixed(4)}, dy=${dy.toFixed(4)}`);

        // Nếu crosshair đang drag trong vùng "hút đầu"
        if (dx < this.lockZone.toleranceX && dy < this.lockZone.toleranceY) {
            // Ghìm tâm ngay tại vị trí đầu
            player.crosshair.position = {
                x: headPos.x,
                y: headPos.y,
                z: headPos.z
            };

            player.crosshair.lockedBone = this.headBone;
            console.log(`[DragHeadLockStabilizer] ✅ GHÌM TẠI ĐẦU (${this.headBone})`);
        }
    }
};

// vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && DragHeadLockStabilizer.enabled) {
        DragHeadLockStabilizer.stabilize(localPlayer, HeadLockAim.currentTarget);
    }
});
    const SmartBoneAutoHeadLock = {
    enabled: true,
    mode: "aggressive",   // "normal" | "aggressive"
    triggerBones: [
        "bone_LeftClav",
        "bone_RightClav",
        "bone_Neck",
        "bone_Hips"
    ],
    headBone: "bone_Head",
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    // --- Config mặc định (Normal) ---
    lockTolerance: 0.02,       // vùng hút cơ bản
    maxYOffset: 0.0,         // không lố đầu
    maxRotationDiff: 0.001,     // giới hạn sai lệch góc quay
    maxOffsetDiff: 0.0001,       // giới hạn sai lệch offset

    // --- Config Aggressive Mode ---
    aggressive: {
        lockTolerance: 0.0001,   // rộng hơn, dễ hút hơn
        maxYOffset: 0.0,      // cho phép bù y cao hơn
        maxRotationDiff: 0.001,  // cho phép sai lệch nhiều hơn
        maxOffsetDiff: 0.001     // offset xa vẫn hút
    },

    checkAndLock: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let cfg = (this.mode === "aggressive") ? this.aggressive : this;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);
        let headData = enemy.getBoneData(this.headBone); // {position, rotation}

        for (let bone of this.triggerBones) {
            let bonePos = enemy.getBonePosition(bone);
            let boneData = enemy.getBoneData(bone);

            let offsetDiff = Math.sqrt(
                Math.pow(bonePos.x - headPos.x, 2) +
                Math.pow(bonePos.y - headPos.y, 2) +
                Math.pow(bonePos.z - headPos.z, 2)
            );

            let dot =
                headData.rotation.x * boneData.rotation.x +
                headData.rotation.y * boneData.rotation.y +
                headData.rotation.z * boneData.rotation.z +
                headData.rotation.w * boneData.rotation.w;
            let rotationDiff = 1 - Math.abs(dot);

            let dx = Math.abs(aimPos.x - bonePos.x);
            let dy = Math.abs(aimPos.y - bonePos.y);

            // Debug
            console.log(`[SmartBoneAutoHeadLock][${this.mode}] bone=${bone}, dx=${dx.toFixed(4)}, dy=${dy.toFixed(4)}, offsetDiff=${offsetDiff.toFixed(4)}, rotationDiff=${rotationDiff.toFixed(4)}`);

            if (
                dx < cfg.lockTolerance &&
                dy < cfg.lockTolerance &&
                offsetDiff < cfg.maxOffsetDiff &&
                rotationDiff < cfg.maxRotationDiff
            ) {
                let clampedY = Math.min(headPos.y, aimPos.y + cfg.maxYOffset);

                player.crosshair.position = {
                    x: headPos.x,
                    y: clampedY,
                    z: headPos.z
                };

                player.crosshair.lockedBone = this.headBone;
                console.log(`[SmartBoneAutoHeadLock][${this.mode}] ✅ LOCKED to ${this.headBone} (triggered by ${bone})`);
                return;
            }
        }
    }
};

// vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && SmartBoneAutoHeadLock.enabled) {
        SmartBoneAutoHeadLock.checkAndLock(localPlayer, HeadLockAim.currentTarget);
    }
});
    const HeadLockClamp = {
    enabled: true,
    targetBone: "Head",
    maxYOffset: 0.0,   // Giới hạn lệch lên trên đầu (mét) - càng nhỏ càng khít
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    clampAim: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let headPos = enemy.getBonePosition(this.targetBone);
        let aimPos = player.crosshair.position;

        // Nếu crosshair vượt quá đỉnh đầu (trên trục Y)
        if (aimPos.y > headPos.y + this.maxYOffset) {
            aimPos.y = headPos.y + this.maxYOffset;
        }

        // Cập nhật lại crosshair
        player.crosshair.position = aimPos;
    }
};

// Gắn vào loop game
Game.on("update", () => {
    if (localPlayer.isDragging && HeadLockAim.currentTarget) {
        HeadLockClamp.clampAim(localPlayer, HeadLockAim.currentTarget);
    }
});
    const HeadLockAim = {
    enabled: true,
    targetBone: "Head",
    lockSpeed: 1.0, // 1.0 = khóa tức thì, 0.5 = mượt hơn
    fovLimit: 360,    // Chỉ khóa nếu mục tiêu trong FOV này (độ)
    currentTarget: null,

    update: function(player, enemies) {
        if (!this.enabled) return;

        if (player.isFiring) {
            // Nếu chưa có target hoặc target chết → tìm mới
            if (!this.currentTarget || !this.currentTarget.isAlive) {
                this.currentTarget = this.findTarget(player, enemies);
            }
            if (this.currentTarget) {
                this.lockToHead(player, this.currentTarget);
            }
        } else {
            // Ngừng bắn → bỏ lock
            this.currentTarget = null;
        }
    },

    findTarget: function(player, enemies) {
        let bestEnemy = null;
        let minAngle = this.fovLimit;

        let camDir = player.camera.direction;
        let camPos = player.camera.position;

        for (let e of enemies) {
            if (!e.isAlive) continue;

            let headPos = e.getBonePosition(this.targetBone);
            let dir = headPos.subtract(camPos).normalize();
            let angle = camDir.angleTo(dir) * (180 / Math.PI);

            if (angle < minAngle) {
                minAngle = angle;
                bestEnemy = e;
            }
        }
        return bestEnemy;
    },

    lockToHead: function(player, enemy) {
        let headPos = enemy.getBonePosition(this.targetBone);
        let aimDir = headPos.subtract(player.camera.position).normalize();

        // Lerp để có thể mượt hoặc khóa cứng tùy lockSpeed
        player.camera.direction = Vector3.lerp(
            player.camera.direction,
            aimDir,
            this.lockSpeed
        );
    }
};

// Gắn vào game loop
Game.on("update", () => {
    HeadLockAim.update(localPlayer, visibleEnemies);
});
    const HipAssistAim = {
    enabled: true,
    hipBoneName: "Hips",
    headBoneName: "Head",
    hipOffset: { x: -0.05334, y: -0.00351, z: -0.00076 }, // Offset hips
    hipSensitivityBoost: 20.5, // Độ nhạy khi ở vùng hông
    normalSensitivity: 6.0,
    hipDistanceThreshold: 0.001, // Khoảng cách crosshair-hips để kích hoạt

    update: function(player, enemies) {
        if (!this.enabled || enemies.length === 0) return;

        let target = this.getClosestEnemy(player, enemies);
        if (!target) return;

        // Lấy vị trí hips và head
        let hipPos = target.getBonePosition(this.hipBoneName);
        hipPos.x += this.hipOffset.x;
        hipPos.y += this.hipOffset.y;
        hipPos.z += this.hipOffset.z;

        let headPos = target.getBonePosition(this.headBoneName);

        // Khoảng cách crosshair tới hips
        let distToHips = Vector3.distance(player.crosshair.worldPos, hipPos);

        // Nếu gần hips → tăng nhạy để kéo nhanh lên head
        if (distToHips <= this.hipDistanceThreshold) {
            player.aimSensitivity = this.hipSensitivityBoost;
        } else {
            player.aimSensitivity = this.normalSensitivity;
        }

        // Nếu đang kéo → auto hướng về head
        if (player.isDragging) {
            let aimDir = headPos.subtract(player.camera.position).normalize();
            player.camera.direction = Vector3.lerp(
                player.camera.direction,
                aimDir,
                player.aimSensitivity * Game.deltaTime
            );
        }
    },

    getClosestEnemy: function(player, enemies) {
        let camDir = player.camera.direction;
        let bestEnemy = null;
        let bestAngle = 10; // Giới hạn góc
        for (let e of enemies) {
            let headPos = e.getBonePosition(this.headBoneName);
            let dir = headPos.subtract(player.camera.position).normalize();
            let angle = camDir.angleTo(dir) * (180 / Math.PI);
            if (angle < bestAngle) {
                bestAngle = angle;
                bestEnemy = e;
            }
        }
        return bestEnemy;
    }
};

// Chạy vòng lặp
Game.on("update", () => {
    HipAssistAim.update(localPlayer, visibleEnemies);
});
    const FullAutoAimDragLock = {
    enabled: true,
    fov: 180, // Góc tìm mục tiêu
    dragSpeed: 5.5, // Tốc độ kéo về đầu
    hardLockDistance: 0.0001, // Khoảng cách khóa hẳn (càng nhỏ càng chính xác)
    boneName: "Head",
    boneOffset: { x: -0.0457, y: -0.00448, z: -0.02004 },

    update: function(player, enemies) {
        if (!this.enabled || enemies.length === 0) return;

        // Tìm mục tiêu gần nhất trong FOV
        let target = this.getClosestTargetInFOV(player, enemies);
        if (!target) return;

        // Lấy vị trí bone head + offset
        let headPos = target.getBonePosition(this.boneName);
        headPos.x += this.boneOffset.x;
        headPos.y += this.boneOffset.y;
        headPos.z += this.boneOffset.z;

        // Tính vector aim
        let aimVec = headPos.subtract(player.camera.position);
        let dist = aimVec.magnitude();

        if (dist <= this.hardLockDistance) {
            // Hard lock ngay lập tức
            player.camera.lookAt(headPos, 0.0);
        } else {
            // Auto drag về phía head
            let dragVec = aimVec.normalize().scale(this.dragSpeed * Game.deltaTime);
            player.camera.direction = player.camera.direction.add(dragVec).normalize();
        }
    },

    getClosestTargetInFOV: function(player, enemies) {
        let camDir = player.camera.direction;
        let bestTarget = null;
        let bestAngle = this.fov;

        enemies.forEach(enemy => {
            let headPos = enemy.getBonePosition(this.boneName);
            let dirToEnemy = headPos.subtract(player.camera.position).normalize();
            let angle = camDir.angleTo(dirToEnemy) * (180 / Math.PI);
            if (angle < bestAngle) {
                bestAngle = angle;
                bestTarget = enemy;
            }
        });
        return bestTarget;
    }
};

// Chạy vòng lặp auto aim
Game.on("update", () => {
    FullAutoAimDragLock.update(localPlayer, visibleEnemies);
});
    const AimSnapToHead = {
    enabled: true,
    snapOnDrag: true,
    fovLock: 360, // 360° => bất kỳ hướng nào
    lockSmooth: 0.0, // 0 = khóa ngay lập tức

    boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },

    update: function(player, enemy, isDragging) {
        if (!this.enabled || !enemy) return;

        if (this.snapOnDrag && isDragging) {
            // Lấy vị trí bone head của enemy
            const headPos = enemy.getBonePosition("Head");

            // Cộng offset để chỉnh chuẩn vào giữa đầu
            headPos.x += this.boneOffset.x;
            headPos.y += this.boneOffset.y;
            headPos.z += this.boneOffset.z;

            // Tính hướng từ tâm ngắm tới đầu
            const aimDirection = headPos.subtract(player.camera.position);

            // Xoay camera ngay lập tức về hướng head
            player.camera.lookAt(headPos, this.lockSmooth);
        }
    }
};

// Vòng lặp update trong game
Game.on("update", () => {
    AimSnapToHead.update(localPlayer, currentTarget, Input.isDragging());
});
    const HyperMaxLockSystem = {
    // Head Lock siêu nhanh, bám cực chính xác
    HyperHeadLockSystem: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileDragging: true,
        stickiness: "hyper",
        snapToleranceAngle: 0.0,
        disableBodyRecenter: true,
        trackingSpeed: 15.0,        // Cực nhanh, gần như instant
        smoothing: 1.0,
        maxDragDistance: 0.0,
        snapBackToHead: true,
        predictionFactor: 2.0,      // Dự đoán cực mạnh
        autoFireOnLock: true,
        boneOffset: { x: -0.0457, y: -0.00448, z: -0.02004 },
        rotationOffset: { x: 0.0258, y: -0.0861, z: -0.1402, w: 0.9860 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    // Neck Lock backup nếu mất đầu
    HyperNeckLockSystem: {
        enabled: true,
        aimTrackingBone: "bone_Neck",
        autoLock: true,
        lockStrength: "maximum",
        snapBias: 1.0,
        trackingSpeed: 12.0,
        dragCorrectionSpeed: 5.0,
        snapToleranceAngle: 0.0,
        maxLockAngle: 360,
        stickiness: "hyper",
        neckStickPriority: true,
        boneNeck_position: { x: -0.128512, y: 0.0, z: 0.0 },
        boneNeck_rotation: { x: -0.012738, y: -0.002122, z: 0.164307, w: 0.986325 },
        boneNeck_scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    // Touch Boost cực nhạy, bù lag, điều chỉnh vi mô
    TouchBoostPrecisionSystem: {
        enabled: true,
        precisionMode: true,
        boostOnTouch: true,
        boostOnDrag: true,
        boostOnFire: true,
        baseSensitivity: 25.0,
        boostMultiplier: 40.0,
        precisionDragMultiplier: 0.0,
        boostRampUpTime: 0.0,
        boostDecayTime: 0.0,
        microDragPrecision: 0.0005,
        microDragMultiplier: 1.0,
        tapDistanceThreshold: 0.0,
        microAdjustThreshold: 0.0,
        microAdjustSmoothing: 1.0,
        latencyCompensation: true,
        latencyMs: -35,
        overshootProtection: true,
        overshootLimit: 0.0,
        debugLog: false
    },

    // Anti-Recoil + Stabilizer
    AntiRecoilAimStabilizer: {
        enabled: true,
        targetBone: "bone_Head",
        autoCompensateRecoil: true,
        compensationStrength: 0.95,
        smoothFactor: 0.95,
        snapToleranceAngle: 0.0,
        stickiness: "hyper",
        applyWhileFiring: true,
        predictionFactor: 0.9,
        boneOffset: { x: -0.0457, y: -0.00448, z: -0.02004 },
        rotationOffset: { x: 0.0258, y: -0.0861, z: -0.1402, w: 0.9860 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    // Giữ tâm khi bắn, drag siêu mượt
    HoldCrosshairOnHeadWhenFire: {
        enabled: true,
        targetBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileFiring: true,
        trackingSpeed: 2.0,
        predictionFactor: 1.2,
        snapToleranceAngle: 0.0,
        stickiness: "hyper",
        disableBodyRecenter: true,
        smoothing: 0.95,
        boneOffset: { x: -0.0457, y: -0.00448, z: -0.02004 },
        rotationOffset: { x: 0.0258, y: -0.0861, z: -0.1402, w: 0.9860 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    // Auto Tracking Lock + fallback neck
    AutoTrackingLock: {
        enabled: true,
        trackingBone: "bone_Head",
        autoSwitchToNeck: true,
        trackingSpeed: 1.5,
        predictionFactor: 0.9,
        snapToleranceAngle: 0.0,
        maxLockDistance: 250.0,
        stickiness: "hyper",
        ignoreObstacles: true,
        recenterDelay: 0,
        boneOffset: { x: -0.0457, y: -0.00448, z: -0.02004 },
        rotationOffset: { x: 0.0258, y: -0.0861, z: -0.1402, w: 0.9860 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    // Auto headshot khi fire
    AutoShotHead: { autoHeadshot: true, aimListextension: true },

    // Tối ưu lag & khởi động
    FixLagBoost: { fixResourceTask: true },
    CloseLauncherRestore: { closeLauncher: true, forceRestore: true }
};
// Nếu là response từ API config game
if (typeof $response !== 'undefined') {
  let body = $response.body;
  try {
    let json = JSON.parse(body);

    // Patch cấu hình
json.injectionConfig = {
FreeFireAutoHeadLockModule,
    AIMBOT_SYSTEM,
    AimLockConfig,
  AimNeckConfig,
  FeatherDragHeadLock,
  NoOverHeadDrag: true,
  DragHeadLockStabilizer: true,
  SmartBoneAutoHeadLock,
  HeadLockClamp,
  HeadLockAim,
  HipAssistAim,
  AimSnapToHead,
  HyperMaxLockSystem,
  FreeFireSystemInjection,
  FullAutoAimDragLock
};
      $done({ body: JSON.stringify(json) });
  } catch (e) {
    $done({ body });
  }
} else {
  $done({});
}
    // Gán giá trị đặc biệt
    Object.entries(customValues).forEach(([k, v]) => {
        json[k] = v;
    });

    // Set các key = true
    keysTrue.forEach(k => {
        json[k] = true;
    });

    body = JSON.stringify(json);
} catch (e) {
    console.log("❌ Không parse được JSON, giữ nguyên.", e);
}

$done({ body });
