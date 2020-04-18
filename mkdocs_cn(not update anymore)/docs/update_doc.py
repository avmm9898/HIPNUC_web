#!/usr/bin/env python2
# -*- coding: utf-8 -*-

import os, shutil
import os.path
import fnmatch
import glob

path = './'
def get_py(path):
    list1 = os.listdir(path)
    #print(list1)
    for s in list1:
        if os.path.isdir(s):
            path1 = path    #記住當前路徑
            path = path + '\\' +s
            get_py(path)
            path = path1    #遞歸完後返回當前路徑
        else:
            if s.endswith('merge.py') :  #查找文件下的『.docx』文件
                print ('find ' + path + '/' + s)
                cur_dir = os.getcwd()
                os.chdir(path)
                os.system('python merge.py')
                os.chdir(cur_dir)
 
#print(os.getcwd())
get_py(path)

#print os.getcwd()
print ('all complete')