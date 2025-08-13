let body = $response.body;

try {
    let json = JSON.parse(body);

    // Các key với giá trị cụ thể
    json["com.accept_devices_Key_auto.setting"] = "70-100";
    json["com.act_ffxbase64_Key_adt_allow.list"] = "10";
    json["com.adt_xbaseff64_Key_act.list"] = "1440";
json["com.virtual-ffxbase42.accpt-feebase.list-virtualMouseDl-0,03.reroll-setting_accptDevice.dat"] = "60-100";
    // Các key giá trị cụ thể mới
json["com.act_conf_seclect_sync_setting\"100\"Key_acp_allow.file_code_Dtps_com.dts.freefirethmax_auto_cws"] = "70-100_on.uncrack.strings=true";
json["com.acp_conf_seclect_sync_setting\"100\"Key_acp_allow.file_code_apncpss_com.dts.freefireth_auto_cws"] = "70-100_on.uncrack.list=true";
json["com.act_conf_seclect_sync_setting\"100\"Key_acp_allow.rick.file_code_apnrevork_ipssettinghexbase64_appdata_auto_cws"] = "70-100_on.uncrack.strings=true";
json["com.act_conf_seclect_sync_setting\"100\"Key_act_allow.rick.file_code_apnrevork_ipssettinghexbase64_appmaneger_auto_cws"] = "70-100_on.uncrack.list=true";
json["com.act_conf_seclect_sync_setting\"100\"Key_act_allow.file_code_connectInject_unlock_refreshratemax_set\"120\"_device_on_auto_cws"] = "70-100_on_uncrack.so=true";
json["com.act_conf_seclect.boostextreme_system_appdata&_app_com.dts.freefireth_on-set100_Key_act_allow.file_code_auto_cws"] = "70-100.uncrack.so=true";
json["com.act_conf_seclect_seclect_sync_device\"100\"Key_acp_allow.file_code_connectInject_boostextreme_setting-app_com.dts.freefireth_on_auto_cws"] = "70-100_on_uncrack.so=true";
json["com.act_conf_seclect_seclect_sync_setting\"100\"Key_acp_allow.file_code_connectInject-unlock_high-roll-stp_cpssbase64_on_auto_cws"] = "70-100.uncrack.list=true";
json["com.act_conf_seclect_seclect_sync_setting\"100\"Key_acp_allow.file_code_connectInject-unlock-boostmax-optizime-setting_appmanger_on_auto_cws"] = "70-100.uncrack.fzs=true";
json["com.accpt_WyI0IiwiM0l0SlRwQTFTSUNDcXNXQXhsdG8ra0ZmQUU5L0wrVGZRUUQrZ1lybSJd_allow.list"] = "70-120=true";
json["com.analytics_root_WyI0IiwiM0l0SlRwQTFTSUNDcXNXQXhsdG8ra0ZmQUU5L0wrVGZRUUQrZ1lybSJd_auto.cws"] = "70-100=true";
json["com.accept_devices_WyI0IiwiM0l0SlRwQTFTSUNDcXNXQXhsdG8ra0ZmQUU5L0wrVGZRUUQrZ1lybSJd_auto.setting"] = "70-100=true";
json["com.libsystem_pthread.dylib -Pre9M76X3pyLNQCUO6.select.on_allow.file.list"] = true;
    // Các key còn lại mặc định là true
    const keysTrue = [
        "com.high_effect_device.target_lockffbasse64_sellect.on.allow.file",
        "com-ve-hhighc-ffbase64-plist",
        "com-ve-hhighc-ffbase32-plist",
        "com-ur-settingaccpt-prefer.plist",
        "com-ur-system -prefer.data",
        "com.itfz-ffx32base.list",
        "com.jsonaxbaseffx64.data",
        "com.fullaccesspointer.dat",
        "com.lockuni-ffx64.dat",
        "com.rightup.setting.list",
        "com.lockini-ffbasex64",
        "com.inirrate-ffbasex64",
        "com.setup-lockbase.dat",
        "com.lockr-ffx64base",
        "com.-bz-prefer-apn",
        "com.setting-vx-ffbase64-zip",
        "com.exten-ffbasex64",
        "freebase.com.ffx64base",
        "com.regcl-ffbasex32",
        "com.highperformance.ffbasex64",
        "com.khfile-ffbasex64",
        "cwom.vr-device-delay-prefer.apn",
        "com.uc-setting-device.plist",
        "com-vg-hhighc-prefer-ffbasex64.zip",
        "com.vg-lockr-ffbase64",
        "com.vg-prefer-ffbasex64z.zip",
        "com.av-hhighc.data",
        "com.lockl-ffx64base",
        "com.leftup.setting.list",
        "com.lockinix64-ffbasex64",
        "com.br-lockup-prefer.zip",
        "com.bzh-lockdown-prefer.dat",
        "com.fixrecoil-ffbase64",
        "com.lockregcl-ffbase64.apn",
        "com-libdispatch.dylib-n0iFEP",
        "com.Adt-actGonffbase64.dat",
        "com.2C6B-4048GB.setting",
        "com.A03C-1108USJBxbase64.setting",
        "com.lockui.systemxbase64.plist",
        "com.infordevice.systemppi-500-on.zip",
        "com.infordevice.systemppi-500-onxffbase64-apk",
        "com.ppi-unlocksystem/400ppi-on-prefer.android/os",
        "com.lockleft/ui/os-high/on.high.android",
        "com.unlock-lockhead-on-prefer/android-os",
        "com.flextouchdelay3d.android/os",
        "com.syystemunlockppi400-on.ffbase64.apn",
        "com.unlocktouchdelaymedium.on/android/os",
        "com.profileunlocktouchdelay.on-zip",
        "com.infordevicelockreg/high.on_sever_ DAMQ-RQMD_APN_FODER",
        "com.ppi-unlocksystem/400ppi.on-prefer_sever_DAMQ-RQMD_EXP",
        "com.roms-ffx64base.dat",
        "com.ram-ffx64base.dat",
        "com.settinguptm.list",
        "com.gamsrollm.list",
        "com.ss-ffx64.aps",
        "com.writecurently-ffx64base.oss",
        "com.ext-allyacc.fzs",
        "com.rv-settingaccpt-prefer.ips",
        "com.system-uv-touchdelay-0.ips",
        "com.uu.sentov-ffbase64-prefer.list",
        "com.uu.sentov-ffbase32-prefer.list",
        "fae_ffxbase64_DOMAIN-FULL_hyper.roll",
        "rog.theme_ffxbase63_HKEY-USER-ROGL-PKIN_ptspd.list",
        "com.ext-allyacc.fzs",
        "com.itfz-ffx32base.list",
        "com.lockuni-ffx64.dat",
        "com.rightup.setting.list",
        "com.lockini-ffbasex64",
        "com.inirrate-ffbasex64",
        "com.exten-ffbasex64",
        "com.highperformance.ffbasex64",
        "com.regcl-ffbasex32",
        "com.khfile-ffbasex64",
        "freebase.com.ffx64base",
        "com.setup-lockbase.dat"
    ];

    keysTrue.forEach(k => json[k] = true);

    body = JSON.stringify(json);
} catch (e) {
    console.log("❌ Không parse được JSON, giữ nguyên.");
}

$done({ body });
