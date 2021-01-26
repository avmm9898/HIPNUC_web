#!/usr/bin/env python2
# -*- coding: utf-8 -*-

import os, shutil
output_name = 'hi221um_cn.md'

def scptree(src, dst):
	if os.path.exists(dst):
		shutil.rmtree(dst)
	shutil.copytree(src, dst)

if os.path.exists(output_name):
    os.remove(output_name)

scptree('../um_common_ch/common_figures', './common_figures')

ch_list = []
ch_list.append('hi221um_raw_cn.md')
ch_list.append('../um_common_ch/calibration_acc_gyr.md')
ch_list.append('../um_common_ch/calibration_mag.md')
ch_list.append('../um_common_ch/serial_protocol.md')
ch_list.append('../um_common_ch/data_packet_rf.md')
ch_list.append('../um_common_ch/at_cmd_basic.md')
ch_list.append('../um_common_ch/at_cmd_gwid.md')
ch_list.append('../um_common_ch/at_cmd_mode.md')
ch_list.append('../um_common_ch/appendix_c_fimreware_update.md')
ch_list.append('../um_common_ch/appendix_d_faq.md')

print ('generate', output_name + '...')

os.system("mdmerge"  + ' ' + ' '.join(ch_list) + ' -o' + output_name)