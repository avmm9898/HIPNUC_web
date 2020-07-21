



## 附录B - 四元数-欧拉角转换

### 四元数基础

四元数是一个四维空间上的一点，使用一个实数和三个虚数来代表：$q \in \mathbb{R}^{4}=\mathbb{H}$

四元数有如下几种常用的表示方法：

| 复数表示                                                     | 向量表示                                                     | 四元数表示法1                               | 四元数表示法2                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------- | ------------------------------------------- |
| $q=q_{0}+\mathrm{i} q_{1}+\mathrm{j} q_{2}+\mathrm{k} q_{3}$ | $q=\left[q_{0}, \mathbf{q}\right]=\left[q_{0},\left(\begin{array}{l}{q_{1}} \\ {q_{2}} \\ {q_{3}}\end{array}\right)\right]$ | $q=\left[q_{0}, q_{1}, q_{2}, q_{3}\right]$ | $q=\left[q_{w}, q_{x}, q_{y}, q_{z}\right]$ |

其中：

$$
\mathrm{i}^{2}=\mathrm{j}^{2}=\mathrm{k}^{2}=\mathrm{ijk}=-1
$$

$$
\mathrm{ij}=\mathrm{k}=-\mathrm{ji}, \quad \mathrm{jk}=\mathrm{i}=-\mathrm{kj}, \quad \mathrm{ki}=\mathrm{j}=-\mathrm{ik}
$$




四元数乘法：

$$
\mathbf{p} \otimes \mathbf{q}=\left[\begin{array}{l}{p_{w} q_{w}-p_{x} q_{x}-p_{y} q_{y}-p_{z} q_{z}} \\ {p_{w} q_{x}+p_{x} q_{w}+p_{y} q_{z}-p_{z} q_{y}} \\ {p_{w} q_{y}-p_{x} q_{z}+p_{y} q_{w}+p_{z} q_{x}} \\ {p_{w} q_{z}+p_{x} q_{y}-p_{y} q_{x}+p_{z} q_{w}}\end{array}\right]
$$



一个单位四元数总是可以表示为这种这种形式：$q_{R}(\alpha, \mathbf{u})=\left[\cos \frac{\alpha}{2}, \sin \frac{\alpha}{2} \cdot \mathbf{u}\right]$

其中$\alpha$ 是旋转角度，$\mathbf{u} \in \mathbb{R}^{3}$ 为旋转轴，且$\|\mathbf{u}\|=1$.



### 四元数与旋转矩阵，欧拉角转换

#### 四元数->旋转矩阵

(对应四元数$q^{b}_{n}$代表从n系到b系的**坐标**变换矩阵，$q^{b}_{n}$也可以理解为 从b系到n系的**坐标系**的变换，前半句说的是"坐标变换"，后半句说的是"坐标系变换"，请注意两者区别。

$$
R^{b}_{n} =\left[\begin{array}{ccc}{q_{0}^{2}+q_{1}^{2}-q_{2}^{2}-q_{3}^{2}} & {2\left(q_{1} q_{2}+q_{0} q_{3}\right)} & {2\left(q_{1} q_{3}-q_{0} q_{2}\right)} \\ {2\left(q_{1} q_{2}-q_{0} q_{3}\right)} & {q_{0}^{2}-q_{1}^{2}+q_{2}^{2}-q_{3}^{2}} & {2\left(q_{2} q_{3}+q_{0} q_{1}\right)} \\ {2\left(q_{1} q_{3}+q_{0} q_{2}\right)} & {2\left(q_{2} q_{3}-q_{0} q_{1}\right)} & {q_{0}^{2}-q_{1}^{2}-q_{2}^{2}+q_{3}^{2}}\end{array}\right]
$$



#### 四元数->欧拉角

 旋转矩阵，四元数和欧拉角是表示旋转的三种常用方式，其中另外两种表示形式转换为欧拉角时，必须先指定欧拉角旋转顺序。本产品使用"ZYX"旋转顺序,即先旋转航向角，然后俯仰角，最后横滚角：

  转换公式为：

$$
\left[\begin{array}{c}{\phi}(横滚) \\ {\theta}(俯仰) \\ {\psi}(航向)\end{array}\right] = \left[\begin{array}{c}{\operatorname{atan} 2\left(2 q_{2} q_{3}+2 q_{0} q_{1},  {q_{3}^{2}-q_{2}^{2}-q_{1}^{2}+q_{0}^{2} )}\right.} \\ {-\operatorname{asin}\left(2 q_{1} q_{3}-2 q_{0} q_{2}\right)} \\ {\operatorname{atan} 2\left(2 q_{1} q_{2}+2 q_{0} q_{3}\right)} , {q_{1}^{2}+q_{0}^{2}-q_{3}^{2}-q_{2}^{2} )}\end{array}\right]
$$

#### 欧拉角->四元数

记$s_{\phi}= \sin \frac{\phi}{2}, c_{\phi}= \cos \frac{\phi}{2}$,以此类推：

$$
\mathbf{q}=\left[\begin{array}{c}{c_{\phi / 2} c_{\theta / 2} c_{\psi / 2}+s_{\phi / 2} s_{\theta / 2} s_{\psi / 2}} \\ {-c_{\phi / 2} s_{\theta / 2} s_{\psi / 2}+c_{\theta / 2} c_{\psi / 2} s_{\phi / 2}} \\ {c_{\phi / 2} c_{\psi / 2} s_{\theta / 2}+s_{\phi / 2} c_{\theta / 2} s_{\psi / 2}} \\ {c_{\phi / 2} c_{\theta / 2} s_{\psi / 2}-s_{\phi / 2} c_{\psi / 2} s_{\theta / 2}}\end{array}\right]
$$

#### 欧拉角->旋转矩阵(n->b)

$$
R^{b}_{n} = \left[\begin{array}{ccc}{c_{\theta} c_{\psi}} & {c_{\theta} s_{\psi}} & {-s_{\theta}} \\ {s_{\phi} s_{\theta} c_{\psi}-c_{\phi} s_{\psi}} & {s_{\phi} s_{\theta} s_{\psi}+c_{\phi} c_{\psi}} & {c_{\theta} s_{\phi}} \\ {c_{\phi} s_{\theta} c_{\psi}+s_{\phi} s_{\psi}} & {c_{\phi} s_{\theta} s_{\psi}-s_{\phi} c_{\psi}} & {c_{\theta} c_{\phi}}\end{array}\right]
$$

#### 旋转矩阵(n->b) 到欧拉角

$$
\left[\begin{array}{c}{\phi} \\ {\theta} \\ {\psi}\end{array}\right]=\left[\begin{array}{c}{\operatorname{atan} 2\left(r_{23}, r_{33}\right)} \\ {-\operatorname{asin}\left(r_{13}\right)} \\ {\operatorname{atan} 2\left(r_{12}, r_{11}\right)}\end{array}\right]
$$




