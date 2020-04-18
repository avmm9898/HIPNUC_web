#!/usr/bin/env python2
# -*- coding: utf-8 -*-

import os, shutil
output_name = 'ch100.md'

def scptree(src, dst):
	if os.path.exists(dst):
		shutil.rmtree(dst);
	shutil.copytree(src, dst);

if os.path.exists(output_name):
    os.remove(output_name)

scptree(unicode('../um_common_ch/common_figures','utf8'), './common_figures');

ch_list = []
ch_list.append('ch100_raw.md')
ch_list.append('../um_common_ch/coordinate_system_ned.md')
ch_list.append('../um_common_ch/appliction_guide.md')
ch_list.append('../um_common_ch/serial_protocol.md')
ch_list.append('../um_common_ch/at_cmd.md')
ch_list.append('../um_common_ch/appendix_b_math.md')
ch_list.append('../um_common_ch/appendix_c_fimreware_update.md')


print 'generate', output_name + '...';

os.system("mdmerge"  + ' ' + ' '.join(ch_list) + ' -o' + output_name)