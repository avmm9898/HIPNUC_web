const messages = {
  en: {
    navbar: {
      home: 'Home',
      products: 'Products',

      hi221: 'HI221 (Multi-node Motion Catpure)',
      hi226: 'HI226 (IMU/ARU, SMD)',
      hi229: 'HI229 (IMU/ARU/AHRS, SMD)',
      ch100: 'CH100 (IMU/ARU/AHRS, SMD)',
      ch110: 'CH110 (IMU/ARU/AHRS, Rugged Shell)',
      HI210x:'HI210x (USB to 1/2/4 UART)',
      HI394x:'HI394x (USB to CAN)',

      lowcost: 'Low Cost Module',
      high_precision: 'High Precision Module',
      wireless: 'High-speed Wireless Kit',
      usb_conversion:'Interface Conversion Chips',
      
      documentation: 'Documentation',
      contact: 'Contact&Purchase',
      language: 'Language',
    },
    index: {
      intro: 'Welcome to HiPNUC',
      intro2: 'We make professional, advanced, and tiny IMU/ARU/AHRS systems and products.',
    },
    contact: {
      title1: 'Sample Requests & Supports',
      content1: 'If you need samples, bulk purchase, or other supports, please contact our office.',
      beijing: 'Beijing Head Office',
      b_address: 'Address : 340, 3rd Floor, Singularity Center, Building 1, No. 1 Yard East Road, Shahe Town, Changping District, Beijing',
      b_phone: 'Phone (Mr.Liu) : +86 18612030435',
      taobao: 'Buy on Taobao >',
      taipei: 'Taipei',
      tw_phone: 'Phone (Mr.Hsu) : +886 0908179107',
      ruten: 'Buy on Ruten >',
      title2: 'Business Partner',
      content2: 'We welcome you all no matter you are researcher, student, maker or company. These are parts of our customers.'
    },
    products: {
      
      hi221_intro: 'Wireless and high-speed data acquisition for multi points and motion capturing.',
      table_hi221_h1: 'Wireless Modules',
      table_hi221_app: 'Wireless machinery, Motion capture, Multi-node data acquisition',

      table_hi221_max_number: 'Maximum Connection of Wireless Nodes',
      
      hi226_intro: 'Mainly target for robot heading measurement, high speed attitude acquisition and motion stabilization equipment.',
      table_hi226_h1: 'Low-cost Modules',
      table_hi226_app: 'Robots, Unmanned driving, AI machinery, AGV.',
      table_hi229_app:'Robots, Unmanned driving, AI machinery, AGV, Electronic compass.',
      
      ch100_intro:'CH100 is an compact package of IMU/ARU/AHRS with high performance, \
      small size and ultra low drift. \
      It can simultaneously output 3-axis angular velocity, 3-axis acceleration, quaternion \
      and Euler angle by our sensor fusion algorithm, \
      combined with the latest redundant gyroscope correction technology \
      to reduce the bias drift to 2.5°/hr. \
      CH100 also provides multi-functional commands for customization, \
      specially built for robots, unmanned driving, smart agricultural machinery, and AGVs.',
      
      table_ch100_h1:'Industrial & High Accuracy Module',
      table_ch100_app:'Construction machinery, AI agricultural machinery, Robots, Exoskeleton',

      ch110_intro: 'CH110 has high-performance, IP67 design, and RS232/485/CAN interfaces.\
      It can simultaneously output the 3-axis angular velocity, 3-axis acceleration, quaternion \
      and Euler angle by our sensor fusion algorithm with low drift. \
      CH110 also provides multi-functional commands for customization, \
      which are specially built by our company for robots, unmanned driving, \
      waterproof equipment, outdoor machinery, AI agricultural machinery.',

      table_ch110_h1: 'Industrial & IP67 shell',
      table_ch110_app: 'Industrial robot, AGV, Watercraft, Outdoor Machine',
      
      table_image: 'Image',
      table_product: 'Product',
      table_applications: 'Applications',
      table_type: 'Type',
      table_data_interface: 'Data Interface',
      table_size: 'Size (WxLxH) mm',
      table_wireless_rate: 'Maximum of Wireless Transmission Rate',
      table_uart_rate: 'Output Rate (UART)',
      table_avg_standby: 'Average Standby Current',
      table_avg_working: 'Average Working Current',
      table_avg_time: 'Average Working Time',
      table_bias_stability:'Bias Drift',
      table_range: 'Range',
      table_sampling_rate: 'Sampling Rate',
      table_gravity_note: 'Note : 1G = 1x (Gravitational acceleration)',
      table_download: 'Document and Software',
      table_more: 'More',
      table_less: 'Less',
      gyro: 'Gyroscope',
      acce: 'Accelerometer',
      magnet: 'Magnetometer',
      download: 'Download',
      software_intro:'A Powerful Software for Our Products'
    },
    footer: {
      about_title: 'About HiPNUC',
      about_content: 'HiPNUC is dedicated to develope cost-effective IMU/ARU/AHRS with high quality, providing mature and advanced integrated navigation modules.',
      github: 'Visit our github',
      library_title: 'Our Library',
      lib1: 'Digital filering with matlab',
      lib2: 'Mathematic basis of rotation',
      lib3: 'Basic concepts of 3D inertial sensors and attitude',
      lib4: 'Notes of MIT linear algebra',
      lib5: 'Basic concepts of IMU/VRU/AHRS/6-axis/9-axis',
      opentime_title: 'Business Hours',
      opentime1: 'Monday to Friday : 09:00-19:00',
      opentime2: 'Saturday : 09:00-17:00',
      sales1: 'Sales (Beijing)',
      sales2: 'Sales (Taipei)'
    }

  },
  tc: {
    navbar: {
      home: '首頁',
      products: '產品',

      hi221: 'HI221 (多節點高速動作捕捉)',
      hi226: 'HI226 (IMU/ARU 模組, SMD)',
      hi229: 'HI229 (IMU/ARU/AHRS 模組, SMD)',
      ch100: 'CH100 (IMU/ARU/AHRS 模組, SMD)',
      ch110: 'CH110 (IMU/ARU/AHRS 模組, IP67 外殼)',
      HI210x:'HI210x (USB 轉 1/2/4路 UART)',
      HI394x:'HI394x (USB 轉 CAN)',

      lowcost: '泛用型模組',
      high_precision: '精密型模組',
      wireless: '無線套件',
      usb_conversion:'介面轉換晶片',

      documentation: '文件與軟體',
      contact: '聯絡與購買',
      language: '語言',
    },
    index: {
      intro: 'HiPNUC 超核電子',
      intro2: '提供高度整合的泛用型到精密型的 IMU/ARU/AHRS 系統與產品',
    },
    products: {
      hi221_intro: "HI221 為9軸無線姿態感測節點，整合獨家的融合演算及校準技術。"+
      "可輸出3軸角速度、3軸加速度、3軸磁力計的原始數據，及融合演算後的四元數與歐拉角。"+
      "具備 Micro-USB 與無線輸出方式，適合大空間的動作捕捉、製作人體互動體驗設備。",
      table_hi221_h1: '無線模組',
      table_hi221_app: '無線設備, 動作捕捉, 多節點數據採集',

      table_hi221_max_number: '無線節點最大連接數',
      
      hi226_intro: 'HI226 整合3軸加速度計、3軸陀螺儀、3軸磁場計(HI229)、微處理器，是一款性能與體積兼備的慣性測量單元(IMU)。'+
      '同時輸出3軸角速度、3軸加速度、3軸磁場的原始數據，及融合演算後的四元數與歐拉角。'+
      '提供多功能模組控制指令，為機器人、無人駕駛、AR/VR提供更多元可能。'+
      '可用於機器人航向測量，高速姿態採集和運動穩定設備。',
      table_hi226_h1: '泛用型模組',
      table_hi226_app: '機器人、無人駕駛、智慧機械、AGV',
      table_hi229_app:'機器人、無人駕駛、智慧機械、AGV、電子羅盤',
      
      ch100_intro:'CH100 是一款高性能、小體積、低延時的慣性測量單元(IMU)。'+
      '可同時輸出3軸角速度、3軸加速度，及融合演算後的四元數與歐拉角，結合最新的冗餘陀螺儀校正技術，'+
      '使偏移降低到每小時 2.5° 以內。除此之外提供多功能指令，'+
      '專為機器人、無人駕駛、智慧農機、AGV 而打造。',
      
      table_ch100_h1:'工業級高精度模組',
      table_ch100_app:'工程機械、智慧農機、高精度測量設備',

      ch110_intro: 'CH110 是一款高性能、小體積、低延時的慣性測量單元(IMU)，'+
      '具備 IP67 防水防塵外殼與防水接頭設計。同時輸出3軸角速度、3軸加速度，'+
      '及融合演算後的四元數與歐拉角。除此之外提供多功能指令，'+
      '可用於機器人、無人駕駛、防水設備、戶外機械、智慧農機。',

      table_ch110_h1: '工業級外殼模組',
      table_ch110_app: '工業機械, AGV, 水上設備, 戶外機械',

      
      table_image: '圖片',
      table_product: '產品型號',
      table_applications: '主要應用領域',
      table_type: '類型',
      table_data_interface: '數據接口',
      table_size: '尺寸 (寬x長x高) mm',
      table_wireless_rate: '最大無線傳輸速率',
      table_uart_rate: 'UART傳輸速率',
      table_avg_standby: '平均待機電流',
      table_avg_working: '平均工作電流 ',
      table_avg_time: '平均工作時長',
      table_bias_stability:'零偏穩定性',
      table_range: '測量範圍',
      table_sampling_rate: '採樣率',
      table_gravity_note: '註記 : 1G = 1 x (重力加速度)',
      table_download: '文件與軟體下載',
      table_more: '更多',
      table_less: '收起',
      gyro: '陀螺儀',
      acce: '加速度計',
      magnet: '磁場計',
      download: '下載',
      software_intro:'與產品搭配 : 數據紀錄、圖表呈現、客製化指令'
    },
    contact: {

      title1: '樣本申請與銷售支援',
      content1: '如果您需要申請樣品，批量購買或其他支援與服務，請聯絡我們的辦公室。',
      beijing: '北京總公司',
      b_address: '地址 : 北北京市昌平區沙河鎮能源東路1號院1號樓奇點中心3層340',
      b_phone: '連絡電話 (劉先生) : +86 18612030435',
      taobao: '前往淘寶購買 >',
      taipei: '台灣代理',
      tw_phone: '聯絡電話 (許先生) : +886 0908179107',
      ruten: '前往露天購買 >',
      title2: '合作夥伴',
      content2: '無論您是研究人員，學生，創客或是公司，我們都竭誠歡迎您。以下是使用我們產品的部分客戶。'

    },
    footer: {
      about_title: '關於超核電子',
      about_content: 'HiPNUC 超核電子致力於開發具有高成本效益的高品質 IMU/ARU/AHRS。'+
      '多年的低成本 MEMS 傳感器算法開發經驗，提供成熟和先進的集成導航模組，為客戶提供多樣的姿態檢測方案。',
      github: '前往我們的Github',
      library_title: '圖書館',
      lib1: 'Matlab 數字濾波入門',
      lib2: '旋轉的數學表示-四元數與歐拉角以及相互轉化',
      lib3: '三軸慣性傳感器和姿態解算的基本概念',
      lib4: 'MIT線性代數筆記',
      lib5: 'IMU/VRU/AHRS/6軸9軸等基本概念',
      opentime_title: '服務時間',
      opentime1: '周一至周五 : 09:00-19:00',
      opentime2: '周六至周日 : 09:00-17:00',
      sales1: '銷售點 (北京)',
      sales2: '銷售點 (台北)'
    }
  },
  cn: {
    navbar: {
      home: '首页',
      products: '产品',
      hi221: 'HI221 (多节点高速动作捕捉)',
      hi226: 'HI226 (IMU/ARU 模块, SMD)',
      hi229: 'HI229 (IMU/ARU/AHRS 模块, SMD)',
      ch100: 'CH100 (IMU/ARU/AHRS 模块, SMD)',
      ch110: 'CH110 (IMU/ARU/AHRS 模块, IP67 外壳)',
      HI210x:'HI210x (USB 转 1/2/4路 UART)',
      HI394x:'HI394x (USB 转 CAN)',

      lowcost: '低成本模块',
      high_precision: '高精度模块',
      wireless: '多节点高速无线动作捕捉套件',
      usb_conversion:'接口转换类芯片',

      documentation: '资料下载',
      contact: '联络与购买',
      language: '语言',
    },
    index: {
      intro: 'HiPNUC 超核电子',
      intro2: '提供高经济效益、专业、精准、小巧的 IMU/ARU/AHRS 系统与产品。',
    },
    products: {

      hi221_intro: "HI221 为9轴无线姿态传感节点，整合独家的融合演算及校准技术。"+
      "可输出3轴角速度、3轴加速度、3轴磁力计的原始数据，及融合演算後的四元数与欧拉角。"+
      "具备 Micro-USB 与无线输出方式，适合大空间的动作捕捉、制作人体交互体验设备等。",
      table_hi221_h1: '无线模块',
      table_hi221_app: '无线设备, 动作捕捉, 多节点数据采集',

      table_hi221_max_number: '无线节点最大连接数',
      
      hi226_intro: '可用于机器人航向测量，高速姿态采集和运动稳定设备。',
      table_hi226_h1: '泛用型模块',
      table_hi226_app: '机器人、无人驾驶、智能机械、AGV',
      table_hi229_app:'机器人、无人驾驶、智能机械、AGV、电子罗盘',
      
      ch100_intro:'CH100 是一款高性能、小体积、低延时的惯性测量单元(IMU)。'+
      '可同时输出3轴角速度、3轴加速度，及融合演算後的四元数与欧拉角，结合最新的冗余陀螺仪校正技术，'+
      '使偏移降低到每小时 2.5° 以内。除此之外提供多功能指令，'+
      '专为机器人、无人驾驶、智能农机、AGV 而打造。',
      
      table_ch100_h1:'工业级高精度模块',
      table_ch100_app:'工程机械、智能农机、高精度测量设备',

      ch110_intro: 'CH110 是一款高性能、小体积、低延时的惯性测量单元(IMU)，'+
      '具备 IP67 防水防尘外壳与防水接头设计。同时输出3轴角速度、3轴加速度，'+
      '及融合演算後的四元数与欧拉角。除此之外提供多功能指令，'+
      '可用于机器人、无人驾驶、防水设备、户外机械、智能农机等',

      table_ch110_h1: '工业级外壳模块',
      table_ch110_app: '工业机械, AGV, 水上设备, 户外机械',

      
      table_hi226_h1: 'IMU, VRU, AHRS 模块',
      table_hi226_app1: '机器人姿态测量',
      table_hi229_app1:'虚拟实境',
      table_hi229_app2:'高速动态姿态测量',
      table_hi229_app3:'电子罗盘',
      table_ch110_h1: '参数与性能',
      table_ch110_app1: '适用工业机器人，AGV',
      table_ch110_app2: 'IP67 防水防尘',
      table_image: '图片',
      table_product: '产品型号',
      table_applications: '主要应用领域',
      table_type: '类型',
      table_data_interface: '数据接口',
      table_size: '尺寸 (宽x长x高) mm',
      table_wireless_rate: '最大无线传输速率',
      table_uart_rate: 'UART传输速率',
      table_avg_standby: '平均待机电流',
      table_avg_working: '平均工作电流 ',
      table_avg_time: '平均工作时长',
      table_bias_stability:'零偏稳定性',
      table_range: '测量范围',
      table_sampling_rate: '采样率',
      table_gravity_note: '注记 : 1G = 1 x (重力加速度)',
      table_download: '文件与软件下载',
      table_more: '更多',
      table_less: '收起',
      gyro: '陀螺仪',
      acce: '加速度计',
      magnet: '磁传感器',
      download: '下载',
      software_intro:'适用于我们产品的强大软件'
    },
    contact: {

      title1: '样本申请与销售支援',
      content1: '如果您需要申请样品，批量购买或其他支援与服务，请联络我们的办公室。',
      beijing: '北京总公司',
      b_address: '地址 : 北京市昌平区沙河镇能源东路1号院1号楼奇点中心3层340',
      b_phone: '连络电话 (刘国兵) : +86 18612030435',
      taobao: '前往淘宝购买 >',
      taipei: '台湾代理',
      tw_phone: '联络电话 (许先生) : +886 0908179107',
      ruten: '前往露天购买 >',
      title2: '合作伙伴',
      content2: '无论您是研究人员，学生，创客或是公司，我们都竭诚欢迎您。以下是使用我们产品的部分客户。'

    },
    footer: {
      about_title: '关于超核电子',
      about_content: 'HiPNUC 超核电子致力于开发具有高成本效益的高质量IMU / AHRS。多年的低成本MEMS传感器算法开发经验，提供成熟和先进的集成导航模组，为客户提供最具性价比的姿态检测方案。',
      github: '前往我们的Github',
      library_title: '图书馆',
      lib1: 'Matlab 数字滤波入门',
      lib2: '旋转的数学表示-四元数与欧拉角以及相互转化',
      lib3: '三轴惯性传感器和姿态解算的基本概念',
      lib4: 'MIT线性代数笔记',
      lib5: 'IMU/VRU/AHRS/6轴9轴等基本概念',
      opentime_title: '服务时间',
      opentime1: '周一至周五 : 09:00-19:00',
      opentime2: '周六至周日 : 09:00-17:00',
      sales1: '销售点 (北京)',
      sales2: '销售点 (台北)'
    }
  },
};

function doCookieSetup(name, lang) {
  document.cookie = name + "=" + escape(lang);
  window.location.reload();
}
function getCookie(name) {
  var arg = escape(name) + "=";
  var nameLen = arg.length;
  var cookieLen = document.cookie.length;
  var i = 0;
  while (i < cookieLen) {
    var j = i + nameLen;
    if (document.cookie.substring(i, j) == arg) return getCookieValueByIndex(j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
  }
  return null;
}

function getCookieValueByIndex(startIndex) {
  var endIndex = document.cookie.indexOf(";", startIndex);
  if (endIndex == -1) endIndex = document.cookie.length;
  return unescape(document.cookie.substring(startIndex, endIndex));
}
function listCookie() {
  document.writeln("<table>");
  document.writeln("<tr><th>Name<th>Value");
  cookieArray = document.cookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    thisCookie = cookieArray[i].split("=");
    cName = unescape(thisCookie[0]);
    cValue = unescape(thisCookie[1]);
    document.writeln("<tr><td>" + cName + "</td><td>" + cValue + "</td>");
  }
  document.writeln("</table>");
}





