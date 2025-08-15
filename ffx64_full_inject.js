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
 TouchBoostPrecisionSystem: {
    enabled: true,                     
    precisionMode: true,                

    baseSensitivity: 5.0,               // Nhạy gốc cao
    boostMultiplier: 10.0,              // Hệ số tăng cực đại
    precisionDragMultiplier: 0.1,       // Rất chậm khi vi chỉnh (micro adjust)

              // Cửa sổ tap lâu hơn để chắc chắn nhận diện
    tapDistanceThreshold: 0.0001,       // Rất nhỏ => tap chính xác hơn

    microAdjustThreshold: 0.0001,       // Drag cực nhỏ vẫn nhận dạng
    microAdjustSmoothing: 1.0,         // Siêu mượt khi micro adjust

    latencyCompensation: true,          
    latencyMs: -25,                     // Bù âm => phản ứng sớm hơn dự kiến

    overshootProtection: true,          
    overshootLimit: 0.0001,              // Không cho vượt quá 0.8mm (cực chính xác)

    debugLog: false,
},
     PointerSpeedBoost: {
    pointerSpeedBoost: 9,
    confPointerTiming: 1,
    selectPointerSpeedRoot9: 1
  },
  PPIInjection: {
    ppiOverride: 550,
    selectPPIInfo: 1
  },
  DPIInjection: {
    dpiPointer: 10000
  },
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
    headLockPriority: true,       // Luôn ưu tiên đầu
    disableBodyRecenter: true,    // Không trả về thân khi lock
    minDistanceToLock: 0.0,
    boneHead_position_x: -0.0456970781,
    boneHead_position_y: -0.004478302,
    boneHead_position_z: -0.0200432576,
    boneHead_rotation_x: 0.0258174837,
    boneHead_rotation_y: -0.08611039,
    boneHead_rotation_z: -0.1402113,
    boneHead_rotation_w: 0.9860321,
    boneHead_scale_x: 0.99999994,
    boneHead_scale_y: 1.00000012,
    boneHead_scale_z: 1.0,
    AutoDragLockBoneHead_boneHead_position_x: -0.0456970781,
    AutoDragLockBoneHead_boneHead_position_y: -0.004478302,
    AutoDragLockBoneHead_boneHead_position_z: -0.0200432576,
    AutoDragLockBoneHead_boneHead_rotation_x: 0.0258174837,
    AutoDragLockBoneHead_boneHead_rotation_y: -0.08611039,
    AutoDragLockBoneHead_boneHead_rotation_z: -0.1402113,
    AutoDragLockBoneHead_boneHead_rotation_w: 0.9860321,
    AutoDragLockBoneHead_boneHead_scale_x: 1.0,
    AutoDragLockBoneHead_boneHead_scale_y: 1.0,
    AutoDragLockBoneHead_boneHead_scale_z: 1.0
},
    AutoAimLockHeadOnFire_StableDrag: {
    enabled: true,                   // Bật tính năng
    aimBone: "bone_Head",             // Luôn lock vào đầu
    autoLockOnFire: true,             // Nhấn bắn là lock ngay
    holdLockWhileFiring: true,        // Giữ lock khi giữ cò
    dragSmoothFactor: 0.85,           // Mượt khi drag
    maxDragDistance: 0.02,            // Giới hạn lệch tối đa (m)
    snapBackToHead: true,             // Nếu lệch thì tự snap lại
    trackingSpeed: 1.5,               // Tốc độ bám theo
    predictionFactor: 0.9,            // Dự đoán chuyển động
    snapToleranceAngle: 0.0,          // 0 = không lệch khỏi đầu
    stickiness: "extreme",            // Độ bám cao
    disableBodyRecenter: true,        // Không trả lại thân
    smoothing: 1.0,                  // Giảm rung khi bắn
    boneOffset: {                    // Bù vị trí đầu
        x: -0.0456970781,
        y: -0.004478302,
        z: -0.0200432576
    },
    rotationOffset: {                // Bù góc xoay
        x: 0.0258174837,
        y: -0.08611039,
        z: -0.1402113,
        w: 0.9860321
    },
    scale: {                         // Kích thước bone
        x: 1.0,
        y: 1.0,
        z: 1.0
    }
},
    AimNeckLock: {
      aimTrackingBone: "bone_Neck",
  autoLock: true,
  lockStrength: "maximum",
  snapBias: 1.0,
  trackingSpeed: 1.0,
  dragCorrectionSpeed: 4.8,
  snapToleranceAngle: 2.0,
  maxLockAngle: 360,
  stickiness: "high",
  neckStickPriority: true,
snapToleranceAngle: 0.0,
  boneNeck_position_x: -0.128512,
  boneNeck_position_y: 0.0,
  boneNeck_position_z: 0.0,

  boneNeck_rotation_x: -0.012738,
  boneNeck_rotation_y: -0.002122,
  boneNeck_rotation_z: 0.164307,
  boneNeck_rotation_w: 0.986325,

  boneNeck_scale_x: 1.0,
  boneNeck_scale_y: 1.0,
  boneNeck_scale_z: 1.0

  },
AntiRecoilAimStabilizer: {
    enabled: true,                  // Bật chống rung
    targetBone: "bone_Head",         // Lock mặc định vào đầu
    autoCompensateRecoil: true,      // Tự bù giật
    compensationStrength: 0.95,      // 0.0 - 1.0 (cao = giữ chắc hơn)
    smoothFactor: 0.9,               // Mượt khi chỉnh
    snapToleranceAngle: 0.0,         // 0 = không lệch
    stickiness: "extreme",           // Độ bám cao
    applyWhileFiring: true,          // Chỉ hoạt động khi bắn
    predictionFactor: 0.85,          // Dự đoán di chuyển mục tiêu
    boneOffset: {                    // Bù vị trí đầu
        x: -0.0456970781,
        y: -0.004478302,
        z: -0.0200432576
    },
    rotationOffset: {                // Bù góc xoay
        x: 0.0258174837,
        y: -0.08611039,
        z: -0.1402113,
        w: 0.9860321
    },
    scale: {                         // Kích thước bone
        x: 1.0,
        y: 1.0,
        z: 1.0
    }
},
    AutoAimHeadOnFire: {
    enabled: true,                 // Bật auto aim khi bắn
    aimBone: "bone_Head",           // Lock vào đầu
    autoLockOnFire: true,           // Khi nhấn bắn thì lock
    trackingSpeed: 1.5,             // Tốc độ bám
    predictionFactor: 0.9,          // Hệ số dự đoán
    snapToleranceAngle: 0.0,        // 0 = bám tuyệt đối
    stickiness: "extreme",          // Độ bám cao nhất
    headLockPriority: true,         // Ưu tiên đầu
    disableBodyRecenter: true,      // Không trả lại thân
    fireHoldLock: true,             // Giữ lock khi giữ cò
      boneOffset: {                    // Bù vị trí đầu
        x: -0.0456970781,
        y: -0.004478302,
        z: -0.0200432576
    },
    rotationOffset: {                // Bù góc xoay
        x: 0.0258174837,
        y: -0.08611039,
        z: -0.1402113,
        w: 0.9860321
    },
    scale: {                         // Kích thước bone
        x: 1.0,
        y: 1.0,
        z: 1.0
    }
},
   HoldCrosshairOnHeadWhenFire: {
    enabled: true,                 // Bật chế độ giữ tâm ở đầu khi bắn
    targetBone: "bone_Head",        // Luôn lock vào đầu
    autoLockOnFire: true,           // Khi bắn thì lock
    holdLockWhileFiring: true,      // Giữ lock khi giữ cò
    trackingSpeed: 1.5,             // Tốc độ bám theo
    predictionFactor: 0.9,          // Hệ số dự đoán
    snapToleranceAngle: 0.0,        // 0 = không lệch khỏi đầu
    stickiness: "extreme",          // Độ bám cao
    disableBodyRecenter: true,      // Không trả lại thân
    smoothing: 0.85,                // Giảm rung giật
      boneOffset: {                    // Bù vị trí đầu
        x: -0.0456970781,
        y: -0.004478302,
        z: -0.0200432576
    },
    rotationOffset: {                // Bù góc xoay
        x: 0.0258174837,
        y: -0.08611039,
        z: -0.1402113,
        w: 0.9860321
    },
    scale: {                         // Kích thước bone
        x: 1.0,
        y: 1.0,
        z: 1.0
    }
},
    StableDragLockHead: {
    enabled: true,                 // Bật chế độ drag giữ nguyên đầu
    targetBone: "bone_Head",        // Luôn giữ ở đầu
    dragSmoothFactor: 0.85,         // Mượt khi kéo (0.0 = không, 1.0 = rất mượt)
    maxDragDistance: 0.02,          // Giới hạn lệch tối đa (m)
    snapBackToHead: true,           // Nếu lệch thì snap về đầu
    snapToleranceAngle: 0.0,        // 0 = bám tuyệt đối
    stickiness: "extreme",          // Độ bám cao
    headLockPriority: true,         // Ưu tiên đầu
    predictionFactor: 0.85,         // Dự đoán chuyển động
      boneOffset: {                    // Bù vị trí đầu
        x: -0.0456970781,
        y: -0.004478302,
        z: -0.0200432576
    },
    rotationOffset: {                // Bù góc xoay
        x: 0.0258174837,
        y: -0.08611039,
        z: -0.1402113,
        w: 0.9860321
    },
    scale: {                         // Kích thước bone
        x: 1.0,
        y: 1.0,
        z: 1.0
    }
},
    AutoTrackingLock: {
    enabled: true,                 // Bật auto tracking lock
    trackingBone: "bone_Head",      // Mặc định lock vào đầu
    autoSwitchToNeck: true,         // Nếu mất đầu thì chuyển xuống cổ
    trackingSpeed: 1.25,            // Tốc độ bám (1.0 = bình thường)
    predictionFactor: 0.85,         // Hệ số dự đoán chuyển động
    snapToleranceAngle: 0.0,        // Góc dung sai = 0 => bám tuyệt đối
    maxLockDistance: 200.0,         // Khoảng cách tối đa để lock
    stickiness: "extreme",          // Mức độ bám
    ignoreObstacles: true,          // Bỏ qua vật cản
    recenterDelay: 0,               // Không trả tâm về giữa khi mất mục tiêu
      boneOffset: {                    // Bù vị trí đầu
        x: -0.0456970781,
        y: -0.004478302,
        z: -0.0200432576
    },
    rotationOffset: {                // Bù góc xoay
        x: 0.0258174837,
        y: -0.08611039,
        z: -0.1402113,
        w: 0.9860321
    },
    scale: {                         // Kích thước bone
        x: 1.0,
        y: 1.0,
        z: 1.0
    }
},
    AutoShotHead: {
    autoHeadshot: true,
    aimListextension: true
  },
  FixLagBoost: {
    fixResourceTask: true
  },
  CloseLauncherRestore: {
    closeLauncher: true,
    forceRestore: true
  }
};

// Nếu là response từ API config game
if (typeof $response !== 'undefined') {
  let body = $response.body;
  try {
    let json = JSON.parse(body);

    // Patch cấu hình
    json.injectionConfig = FreeFireSystemInjection;

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
