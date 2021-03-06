# 常見問題



## A. IMU，VRU，AHRS 基本認識
### 1. 6軸，9軸， IMU，VRU，AHRS 分別指的是什麼?

> 說明: 以下說法是為了方便快速理解的解釋，不是正式定義。
>
> 6軸、9軸的概念很好理解：說白了就是模組上裝了哪些，多少感測器
>
> 6軸: 3軸(XYZ)加速度計 + 3軸(XYZ)陀螺儀(也叫角速度感測器)
>
> 9軸: 6軸 + 3軸(XYZ)磁場感測器
>
> 
>
> 6軸模組可以構成 VRU(垂直參考單元)和 IMU(慣性測量單元)，9軸模組可以構成 AHRS(航姿參考系統)。
>
> IMU: 慣性測量單元，可以輸出加速度和角速度。並不輸出姿態角等其他資訊。
>
> VRU: IMU的基礎上內置姿態解算算法，可以輸出姿態資訊。
>
> AHRS: VRU的基礎上修改算法，可以解算被測物體的全姿態，包括絕對的航向角(與地磁北極的夾角)。
>



## B. 性能相關

### 1. IMU，VRU 和 AHRS 的性能與侷限

IMU: 

> 慣性測量單元，可以輸出加速度和角速度。並不輸出姿態角等其他資訊

VRU:

> IMU的基礎上內置姿態解算算法，可以輸出姿態資訊。
>
> 靜止狀態下加速度計可以測得重力向量並作為參考，所以靜態下俯仰橫滾角不會漂移而且精度比較高，然而由於航向角與重力垂直，沒有絕對參考，水平方向上的航向角誤差會隨著時間慢慢變大，變的越來越不准 。
>
> 當模組運動時，加速度計測量的不僅僅只有重力，還有其他運動加速度(有害加速度)，所以模組運動中是不能用重力向量作為參考修正俯仰橫滾角的。一個簡單的結論就是：如果模組長時間處於大機動狀態，那麼三個歐拉角誤差都會隨時間變大(越來越不準)，一旦靜止，俯仰橫滾角會被重新"拉"回到正確的位置，而航向角因為沒有參考則不會得到校正。
>

AHRS: 

> VRU的基礎上修改算法，可以解算被測物體的全姿態，包括絕對的航向角(與地磁北極的夾角)，因為要用到地磁感測器，所以必須是9軸模組。另外室內由於地磁場畸變非常嚴重，AHRS 在室內也很難獲得準確的絕對航向角。

### 2. 模組可以積分計算速度和位置麼?

> 理論可以，實際不行(沒有意義)。如果沒有其他方式糾正偏差(比如GPS)，那麼位置會很快發散，比如HI226模組，加速度積分得速度，速度積分得位置。這樣二次積分下來，就算是靜止條件下，1min也會飄幾十米。高速運動/機動飄出1KM也是有可能的。 真正純慣導解算得到穩定的位姿應用的都是高端IMU(光纖，激光陀螺等)一般都價值不菲。

### 3. 模組會受電機等強磁干擾麼?

> 6軸一點都不會，9軸肯定會，而且非常大。所以9軸模式一般不適用於機器人等周圍有磁性物質的場合。

### 4. 解釋一下航向角飄移現象?

> 6軸模組航向角飄移是**必然的**，只是程度的高低不同而已，演算法無法解決晶片性能的極限。需要注意的是所有姿態模組都需要上電靜止1s左右以獲得陀螺零偏，否則航向角飄移會更嚴重，詳見產品手冊描述。
>
> 9軸模組需要配置為9軸模式，並且地磁經過校準，並且無地磁空間畸變干擾的環境下才能輸出穩定無飄移的航向角，室內環境下：辦公桌周圍，廠房，實驗室，儀器設備旁的區域空間磁場畸變非常嚴重，9軸模式下航向角指北精度一般都比較差，初次使用可以到戶外先測試模組性能，在拿回室內比較。

### 5. 沒有轉台等專業設備，如何簡單快速的定性評估動態精度?

> 一個簡單的定性分析方法：
>
> 將模組水平放置，穩定後拿起模組進行隨機機動運動(慢慢動 不要太劇烈，不要超出陀螺量程)，運動一定時間(1min)後回到水平位置，這時候會發現俯仰橫滾角有一個緩慢的 "回正" 過程。
>
> 這是由於運動中加速度計測量的不再只有重力向量，所以無法提供俯仰橫滾角的絕對參考，只能靠陀螺積分來遞推姿態，隨著時間流逝，純陀螺積分姿態必然會有誤差。
>
> 重新水平放置後，模組處於靜止狀態，加速度計測量的又只有重力向量，所以又可以繼續為俯仰、橫滾角提供絕對參考，所以才有 "回正" 過程。 所以，從"回正"的大小程度(而不是快慢)上就可以簡單比較這塊產品的陀螺儀性能。

## C-1. 疑問 : 無線 HI221節點 / HI221接收機

### 1. 接收機會互相干擾嗎?

> 若使用者已經依照說明書設定不同無線頻段 (GWID)，則不會。然而幾項使用情形容易造成互相干擾，需要避免:
>
> 1. 5 米範圍內不建議使用超過 4 組接收機
> 2. 每組接收機與配對節點之間距離相近，例如 `GWID=1` 的接收機與節點距離最近，避免跟 `GWID=2` 的節點距離最近。