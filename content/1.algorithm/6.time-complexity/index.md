# Time Complexity

## 背诵

```js
#include <iostream>
#include <cstring>
#include <algorithm>
#include <queue>
#include <vector> //vector.push_back .top
priority_queue<PII,vector<PII>,greater<PII>> heap;
```

## 数据

```js
在C++中，不同的数据类型在各个系统上可能有所不同，但通常情况下，它们的表示范围如下：

1. **int类型**：通常是32位，可以表示的范围是 -2147483648 到 2147483647（如果是无符号的话，则是 0 到 4294967295）。

2. **unsigned long long (ULL)类型**：通常是64位，可以表示的范围是 0 到 18446744073709551615。

这就是它们在一般情况下的表示范围，当然具体的范围也可以通过 `limits.h` 头文件中的常量来查看，比如 `INT_MAX`，`INT_MIN`，`ULLONG_MAX` 等。
在C++中，通常情况下：

1. **long long类型**：通常是64位，可以表示的范围是 -9223372036854775808 到 9223372036854775807（如果是无符号的话，则是 0 到 18446744073709551615）。

这表示 long long 类型的符号和无符号版本的范围均在上述数值范围内。
1万8千亿
```

## 时间复杂度的判断

js 一秒 `10^7-10^8` 一千万到一亿次
定义全局变量(数组 结构体)是不需要考虑到时间复杂度的 需要被考虑到空间复杂度
程序时间复杂度 更多就是讨论关于 `int main()`**函数内部运行所需的时间** 定义则近乎不需要时间
在 C++中，对于静态数组（例如 int arr[10000]），它们的内存分配是在编译时进行的，
因此在程序运行时不需要额外的时间来执行这个操作。编译器在编译阶段会为这样的静态数组分配内存，
并将其放置在**程序的静态存储区域**中。因此，你在程序运行时访问这样的数组时，并不会有额外的时间开销用于进行内存分配。

综上所述，在声明静态数组时，内存分配是在编译时完成的，因此在**程序运行时不需要额外的时间来执行这个操作**。

## 大 O 符号表示法

大 O 符号表示法（Big O notation）是用来描述算法时间复杂度或空间复杂度的一种数学符号。
它给出了执行算法所需要的资源（通常是时间或空间）与输入大小之间的关系的上界。
简而言之，大 O 符号用于表示算法性能和增长率，特别是在最坏情况或平均情况下的性能。

核心概念

- **描述复杂度：** 大 O 符号表示法描述的是**算法复杂度的增长率**，而不是具体的执行时间。这意味着它关注的是**输入量增大**时，算法的时间或空间需求增加的速度。

- **屏蔽常数：** 使用大 O 符号表示法时，**忽略常数因子和低阶项**。比如，$O(2n)$ 和 $O(n)$ 表达的意思是相同的，都表示算法的时间复杂度是线性增长的。同样，$O(n^2 + n)$ 简化为 $O(n^2)$。

- **最坏情况分析：** 虽然大 O 符号可以用于描述算法在不同情况下的时间复杂度（最坏情况、平均情况、最佳情况），但它最常用于描述最坏情况复杂度，因为这提供了一个性能保证。

示例

- **O(1)**：常数时间复杂度，无论输入数据的大小，算法执行所需时间都是固定的。
- **O(log n)**：对数时间复杂度，每次操作都将数据集减少一定比例，例如二分查找。
- **O(n)**：线性时间复杂度，算法执行时间与输入数据的大小成正比，例如遍历一个数组。
- **O(n log n)**：线性对数时间复杂度，许多高效的排序算法（如归并排序和快速排序）都处在这个级别。
- **O(n^2)**：二次时间复杂度，算法执行时间与输入数据大小的平方成正比，例如简单的两层嵌套循环。
- **O(2^n)**：指数时间复杂度，算法执行时间随输入数据大小指数级增长，例如解决旅行商问题的简单递归。
- **O(n!)**：阶乘时间复杂度，算法执行时间随输入数据的大小的阶乘增长，这在实际应用中通常是不可行的。

### 重要性

大 O 符号表示法是衡量和比较算法效率的重要工具，它允许**开发者在不实际执行程序的情况下对算法的性能做出理论上的估计**。这对于设计高效算法、优化现有算法和选择最适合特定问题的算法方案来说至关重要。通过理解算法的复杂度，开发者可以预测随着数据量的增加算法可能面临的性能挑战，并据此作出明智的决策。

## 时间复杂度相加还是相乘

```js
/*
当一个算法或者程序由多个步骤组成时，总的时间复杂度取决于这些步骤的组合方式。我们如何确定多步骤算法的总体时间复杂度，取决于这些步骤是如何相互关联的——它们是顺序执行的、还是嵌套执行的（比如循环内再嵌套循环）。

## 顺序执行的步骤

如果算法由多个步骤顺序执行，每个步骤有自己的时间复杂度，那么总的时间复杂度是这些步骤时间复杂度的和。然而，在大O表示法中，我们只关心影响最大的项，因为当输入规模足够大时，较小的项对总体性能的影响可以忽略不计。因此，**总的时间复杂度是各个步骤中最大那个时间复杂度**。

例如，一个算法包含三个步骤，其时间复杂度分别是O(1)、O(n)和O(n^2)。虽然总的时间复杂度可以写作O(1) + O(n) + O(n^2)，但是在大O表示法中我们只关心随着n的增长哪个项增长最快，这里显然是O(n^2)。所以，总的时间复杂度取O(n^2)。

## 嵌套执行的步骤

如果算法中的步骤是嵌套执行的，比如在一个循环内部再执行一个循环，我们需要将嵌套步骤的时间复杂度相乘来得到总体的时间复杂度。

例如，如果外部循环的时间复杂度是O(n)，并且它包含一个内部循环，内部循环的时间复杂度也是O(n)，那么整个算法的总时间复杂度是O(n) * O(n) = O(n^2)。

## 时间复杂度的级别

时间复杂度有不同的级别，这通常反映了算法处理数据的效率。以下是一些常见的时间复杂度，从最理想到最差排序：

- O(1)：常数时间复杂度，执行时间不随输入大小变化。
- O(log n)：对数时间复杂度，如二分查找。
- O(n)：线性时间复杂度，如简单查找。
- O(n log n)：线性对数时间复杂度，常见于高效的排序算法，如归并排序和快速排序。
- O(n^2)：二次时间复杂度，如简单的排序算法（冒泡排序、选择排序、插入排序）。
- O(n^3)：立方时间复杂度，某些简单的数学算法或暴力解法可能达到这个级别。
- O(2^n)、O(n!)：指数时间和阶乘时间复杂度，对于可行性和可用性极为有限，在实际应用中通常是不可接受的。

在评估一个算法或程序的效率时，理解和估算时间复杂度是至关重要的。对于实际应用，通常希望算法的时间复杂度尽可能低，以处理大量数据或复杂的问题。
*/
```

### Yxc 原文摘录

一般 ACM 或者笔试题的时间限制是 1 秒或 2 秒。
在这种情况下，C++代码中的操作次数控制在 $10^7 \sim 10^8$ 为最佳。

下面给出在不同数据范围下，代码的时间复杂度和算法该如何选择：

```js
$n \le 30$, 指数级别, dfs+剪枝，状态压缩 dp
$n \le 100$ => $O(n^3)$，floyd，dp，高斯消元
$n \le 1000$ => $O(n^2)$，$O(n^2logn)$，dp，二分，朴素版 Dijkstra、朴素版 Prim、Bellman-Ford
$n \le 10000$ => $O(n * \sqrt n)$，块状链表、分块、莫队
$n \le 100000$ => $O(nlogn)$ => 各种 sort，线段树、树状数组、set/map、heap、拓扑排序、dijkstra+heap、prim+heap、Kruskal、spfa、求凸包、求半平面交、二分、CDQ 分治、整体二分、后缀数组、树链剖分、动态树
$n \le 1000000$ => $O(n)$, 以及常数较小的 $O(nlogn)$ 算法 => 单调队列、 hash、双指针扫描、BFS、并查集，kmp、AC 自动机，常数比较小的 $O(nlogn)$ 的做法：sort、树状数组、heap、dijkstra、spfa
$n \le 10000000$ => $O(n)$，双指针扫描、kmp、AC 自动机、线性筛素数
$n \le 10^9$ => $O(\sqrt n)$，判断质数
$n \le 10^{18}$ => $O(logn)$，最大公约数，快速幂，数位 DP
$n \le 10^{1000}$ => $O((logn)^2)$，高精度加减乘除
$n \le 10^{100000}$ => $O(logk \times loglogk)，k表示位数$，高精度加减、FFT/NTT
```

### 判断时间复杂度的方法

1.判断循环次数 $O(n+m)$ 两维 $O(n^2)￥ [DP] 2.递归 主定理 [快排 归并排序]

### 典型例题分析

### 基础算法

1. **快排**[可能$(log n)$层 ] 归并排序 [一定$(logN)层]
2. **二分** 对半分 会迭代$O(logn)$次
3. **双指针算法** 两种循环 $O(n)$ 里边 j 只加不减

#### 数据结构

1. **单链表** O(1)删掉某个数 栈和队列 也都是 O1 的
2. **单调栈**/**单调队列** 看着是两层循环 但是每个元素最多进出栈一次 那么`--` 只会执行 O(n)次 所以是线性的
3. **Kmp** i 每增加 1 j 最多增加 1 j=ne[j]起码会减去 1 因此 Kmp 也是线性的
4. **Trie** 线性的
5. **并查集** 这个记住就可以了 我们有 **_路径压缩_** [ **_按秩合并_** ]的存在 并查集的时间效率就会变成 $(nlogn)$ [ $nloglogn$ ] 的效率 实际上最坏是$O(logn)$的
6. **堆** 返回最小值 $O(1)$ 插入 需要进行 `DOWN` 或者 `UP` 操作 [堆是一颗完全二叉树] 走到顶部 时间复杂度和堆的高度$O(logn)$成正比的 删除添加就是$O(logn)$
7. **哈希表** 最坏的是很坏 但是基本上几乎不会遇见(和小行星撞击地球的概率是一样的) 增删改查 平均效率是$O(1)$的

#### 搜索与图论

**_搜索的计算量_**
算一下这个函数执行多少次就可以了

1. **DFS** -树根拓展 n 个点 拓展到最后一个点 最后一层的点共 $n!$个点 倒数第一层是 $(n-1)!$个点
   每层的计算量 最后一层输出答案需要$O(n)$ 最后一层是$n!n$ 倒数第一层 是 $(n-1)!n$ 总共 $(n!+(n-1)!+...)n$ 因为不是最后一层还是需要循环 n 都是乘以一个 n
   那么 由于相对于$n!$其他项都是无穷小量 总共效率就是 $n!n$
2. **BFS** 这两个都是画一棵树来看
3. **树与图的深度优先遍历** 图的方法 我们保证每个点只会遍历一次 那么效率 是 n 个点 每个点的边就是 遍历所有边 m 那么深度宽度优先遍历就是 $O(n+m)$
4. **树与图的广度优先遍历**
5. **拓扑排序** 基于宽搜和深搜 所以都是 $O(n+m)$
6. **Dijkstra** -朴素 两种循环 $O(n^2)$ -堆优化版的 每个点只会被遍历一次 就是对每个点的所有边就是所有边 m 循环体内最多执行 m 次 插了 m 次总个数是 m 级别的 内层是 $mlogm$ 由于 $m \le n^2$
   因此 $mlogm \le 2mlogn$ 可以看成 $mlogn$的效率
7. **bellman-ford** 两重循环 总共$O(nm)$
8. **spfa** -最坏 $O(nm)$ 并且可以被卡 理论非常高 但是运行效率非常好 [ 二分图匈牙利 最大流算法] -判负环 mn 的 但是比求最短路要长很多 (两者看起来时间复杂度一样)
9. **Floyd** 三重循环 $O(n^3)$
10. **Prim** 两重循环 $O(n^2)$
11. **Kruskal** 有一个排序 $mlogm$ 还有个循环 $O(m)$ 所以整个时间复杂度是 $mlogm$
12. **染色法判定二分图** 图的深搜或者宽搜 效率是 $O(n+m)$
13. **匈牙利算法** 理论时间复杂度 每个点循环一次 需要$O(n)$ 判断的时候 需要判断所有点的所有边 这个时间效率就是$O(nm)$ 而 m 最坏是$n^2$ 所以匈牙利算法最坏是$O(n^3)$
    但是 实际上运行效率非常快

`long long` 范围的数是 $10^18$ 那么$log10^18$就是 64 有个小技巧就是 $(log_210^x\approx3x)$
那么 $(log_210^{18} \approx54 \approx60)$

#### 数学知识

1. **质数** -试除法 $2-\sqrt(x)$ 那么时间复杂度就是$O(\sqrt(x))$ -分解质因数 $O(\sqrt(x))$ -筛质数 艾什筛法 $\frac{n}{1}+\frac{n}{2}+...+\frac{n}{n}$ 后边是调和级数 =$lnn+c$ [c 是欧拉常数 0.577] 但是是$O(logn)$级别 那么总的时间复杂度就是 $O(nlogn)$ -补充一点 如果是 $\frac{n}{2}+\frac{n}{3}++\frac{n}{5}+\frac{n}{7}...+\frac{n}{n}$ 近似等于 $O(loglogn)$

2. **约数** 最大公约数 辗转相除法 背过 $O(logn)$级别的
3. **欧拉函数**
4. **快速幂** $O(logK)$ 很好算
5. **扩展欧几里得算法**
6. **中国剩余定理**
7. **高斯消元**
8. **求组合数**
9. **容斥原理**
10. **博弈论**

#### 动态规划

动态规划除了看循环几层 还有一个常用的技巧

#### 动态规划问题的计算量 = 状态数量 \* 状态转移的计算量

1. **背包问题** 循环几层 就是几次方
2. **线性 DP** 最长上升子序列 2 两重循环 外层 n 次 内层 $logn$次 所以整个效率是$O(nlogn)$次
3. **区间 DP**
4. **计数类 DP**
5. **数位统计 DP**
6. **状态压缩 DP** 蒙德里安的梦想 外层循环 $2n^2$ 内层 $O(n)$ 所以总共就是 $O((2^n)^2n)$
7. **树形 DP** 没有上司的舞会 看着$O(n)$个状态 每个状态循环 1 次 看似$n^2$(dfs)的效率 但是每个点只会被遍历一次 就是把每个点的所有边遍历一次 就是所有边的数量 所以总共效率是$O(n)$ 线性的
8. **记忆化搜索等内容** 滑雪 两维 每个状态需要多少时间 4 次 O1 的时间 所以就是 $O(n^2)$

动态规划这部分的解释都比较详细 可以看笔记

#### 贪心

都是一个排序加一个循环 排序 logn 循环几层就是多少

1. **区间问题**
2. **Huffman 树**
3. **排序不等式**
4. **绝对值不等式**
5. **推公式**

### 空间复杂度

64M

```
1 Byte=8 bit
1 KB=1024 Byte
1 MB=1024*1024 Byte
1 MB=1024*1024*1024 Byte

int = 4 Byte ==> 64MB = 2^24 => 1千600万 程序的其他地方也要用空间 函数调用和库 不要恰好开满64MB空间 最多用到50M差不多了
char = 1 Byte
double,long long =8 Byte
指针 32是4 Byte 64是8 Byte
bool 1 Byte 不是1位
```

流量是兆位 8M=>1MB/s

## 统计方法

```
int v[N],w[N];
int f[N];

cout<<(sizeof v+sizeof w+sizeof f)<<endl; ==>12120Byte 字节
cout<<(sizeof v+sizeof w+sizeof f)/1024<<endl; ==>12120/1024  KByte 千字节
cout<<(sizeof v+sizeof w+sizeof f)/1024/1024<<endl; ==>12120/1024/1024  MByte 兆字节

开了114M 但是没有爆内存呢 因为操作系统的优化 开了这么多 用的时候不会一下子都给你
当你用到的的时候没有分配会马上给你分配一块 只开没有用的话 一般也没事
```

我们刷一遍一般就有事了 `memset(v/w/f,0,sizeof v/w/f)`

## 栈空间

递归也是需要空间的
快排没有多余数组 默认认为快排额外空间复杂度 $(O1)$的 归并是$O(n)$的 这样是不对的
快排会递归$logn$层 所以快排额外空间是 $O(logn)$

## 无穷大的表示

在 C 和 C++中，`0x3f3f3f3f` 是一个十六进制数，它表示一个 32 位的整数，其中每个十六进制数字（`0x3f`）对应 8 位（一个字节）。因此，`0x3f3f3f3f` 在二进制中实际上是由四个连续的 `00111111`（即 `0x3f` 的二进制表示）组成，总共 32 位。

这里的 `null` 变量被初始化为 `0x3f3f3f3f`，通常用作一个“无穷大”或“极大值”来表示数组 `h` 中的元素尚未被赋值或表示某种“不可用”状态。这个值通常用于初始化数组，以便在算法中通过比较操作来更新这些值。

关于为什么使用 `0x3f3f3f3f` 而不是填充 32 个 1（即 `0xffffffff`），这通常是因为在某些算法中，**我们想要使用一个大于任何可能的有效值的数作为初始值**。`0xffffffff` 通常是 `int` 类型能表示的最大值（在大多数系统和编译器中，假设 `int` 是 32 位并且使用补码表示法）。但是，使用 `0x3f3f3f3f` 可以确保在更新过程中，如果通过加法或其他操作可能导致溢出，这个值仍然保持“极大”状态，从而避免意外的下溢到有效值范围。此外，它也允许在算法中使用负数值，因为 `0x3f3f3f3f` 是一个正数。

至于“为什么不是填充 32 个 1”，这是因为填充 32 个 1 实际上会得到 `0xffffffff`，这是 `int` 类型能表示的最大值。在某些情况下，这可能不是一个好的初始值，因为它可能导致整数溢出问题，特别是在进行加法操作时。使用 `0x3f3f3f3f` 可以提供一个相对较大的初始值，同时保留一定的空间用于加法操作而不会立即溢出。

最后，需要注意的是，选择这样的初始值通常取决于具体的算法和数据范围。在某些情况下，使用 `0xffffffff` 或其他值可能是合适的，但在其他情况下，使用 `0x3f3f3f3f` 或其他特定的“极大”值可能更为合适。

### 关于 0x3f3f3f3f 的数值

执行上述代码会输出 `null` 的十进制值。计算结果为 `1061109567`。因此，`null` 转化为 `int` 的十进制数值是 `1061109567`。
刚好是 10^9 次方 也就是 10 亿

## Sizeof 的单位

`sizeof` 是 C 和 C++ 语言中的一个运算符，用于获取类型或对象在内存中的大小（以字节为单位）。对于数组，`sizeof` 会返回整个数组的大小，而不是数组中元素的数量。

例如，如果你有一个数组 `int a[100];`，`sizeof(a)` 会返回整个数组的大小，即 `100 * sizeof(int)` 字节（具体大小取决于你的平台和编译器，因为 `int` 的大小可能不同）。

如果你想获取数组的元素数量（在这个例子中是 100），你需要手动进行除法操作。但是要注意，当你对数组名进行 `sizeof` 操作时，你得到的是整个数组的大小，所以你需要除以单个元素的大小。这里是一个例子：

```js
#include <stdio.h>

int main() {
    int a[100];
    size_t num_elements = sizeof(a) / sizeof(a[0]);
    printf("%zu\n", num_elements);  // 输出 100
    return 0;
}
```

在这个例子中，`sizeof(a)` 返回整个数组的大小（以字节为单位），`sizeof(a[0])` 返回数组中单个元素的大小（以字节为单位）。将两者相除，就得到了数组的元素数量。注意这里使用了 `%zu` 格式说明符来打印 `size_t` 类型的值，这是 `sizeof` 运算符返回的类型。

## 时间复杂度 LogN 底数问题

不是任意算法问题的时间复杂度都是以 2 为底来衡量的。选择哪个数作为对数的底取决于具体的问题和算法。然而，在计算机科学中，当我们说某个算法的时间复杂度是 O(log n)时，我们通常不特指对数的底数。这是因为对于任何以常数 a 为底的对数函数 log_a(n)，它都可以转换为以任意其他常数 b 为底的对数函数，只是多了一个常数系数。由于我们在分析算法时间复杂度时通常关注渐近行为，即随着输入规模 n 的增大，时间复杂度如何变化，因此这个常数系数是可以忽略的。

例如，如果我们有一个算法的时间复杂度是 O(log_10(n))，**这实际上与 O(log_2(n))是等价的，因为两者都表示算法的运行时间随着输入规模的对数级增长。**因此，在描述算法时间复杂度时，我们通常省略底数，只写 O(log n)，以强调算法的时间复杂度与输入规模的对数成正比。

需要注意的是，有些算法的时间复杂度可能涉及其他类型的对数或数学函数，例如 O(n log n)、O(n^2)、O(2^n)等。这些复杂度表达式反映了算法在不同情况下的性能特点，而底数的选择则取决于具体问题和算法的实现方式。

总结来说，虽然计算机科学中经常使用 O(log n)来表示某些算法的时间复杂度，并且不特指对数的底数，但底数的选择并不是任意的，它取决于具体算法和问题的性质。在实际应用中，我们需要根据具体情况来选择合适的数学工具和表达方式来描述算法的性能。

<p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);">Edit by</span><em style="color: rgba(91, 255, 247, 0.65);">@02sDarling</em></p><p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);"><em>2024-03-21-10:45:56(星期四)</em></span></p>
