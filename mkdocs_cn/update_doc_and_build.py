#!/usr/bin/env python2
# -*- coding: utf-8 -*-

import os, shutil
import os.path
import fnmatch
import glob


os.chdir('./doc_gen/')
os.system('python update_doc.py')
os.chdir('../')
os.system('mkdocs build --clean')
                
print ('all complete')