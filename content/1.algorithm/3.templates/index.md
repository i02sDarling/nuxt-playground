# Templates

## 多个属性的输入输出

```js
int T;
scanf("%d", &T);
while (T -- )
{
    scanf("%d", &n);
    for (int i = 0; i < n; i ++ )
    {
        int t, d, l;
        scanf("%d%d%d", &t, &d, &l);
        p[i] = {t, d, l};
    }

    memset(st, 0, sizeof st);
    if (dfs(0, 0)) puts("YES");
    else puts("NO");
}
```

---------

## 拓展欧几里得方法

1. 要证明 $a \cdot x + b \cdot y = d$，其中 $d = \text{gcd}(a, b)$
2. 由辗转相除法，得到 $a = q \cdot b + r$
3. 使用递归关系得到 $D = \text{gcd}(b, r)$，$D = b \cdot x_1 + r \cdot y_1$
4. 展开$r = a - q \cdot b$
5. 代入$D = \text{gcd}(b, r)$得到$D = b \cdot x_1 + (a - q \cdot b) \cdot y_1$
6. 整理得到 $D = a \cdot y_1 + b \cdot (x_1 - q \cdot y_1)$
7. 因此 $x = y_1$，$y = x_1 - [a/b] \cdot y_1$


```js
/*
1. 这题需要等价替换 (a,b)=(b,a mod b) 那么对应x y也要反转 系数之间是绑定的 
2. 求 ai*xi + bi*yi =gcd(ai,bi)
==> ax+by=(a,b)=(b,a mod b)
=bx+(a mod b)y
//我们这里为什么反转 y x呢 b相当于a 那么y就相当于x
让by+(a mod b)x=(b,a mod b)=(a,b)
展开 a mod b =r= a- [a/b]*b      [下取整]
    因为 a除以b=[a/b]....r余数
所以 r=a-[a/b]*b=a mod b
b*y+(a-[a/b]*b)x=d
整理可以得到 a*x+b(y-[a/b]*x)=d
那么y0=y-[a/b]*x

3. 在这段代码和注释中，通过递归调用求解最大公约数时，有一个基本情形（base case）是处理 $b=0$ 的情况，这对应着递归的终止条件。当 $b=0$ 时，意味着辗转相除法已经将剩余的非零数调整到了余数为0的情况，此时 $a$ 是最大公约数，而 $x=1, y=0$ 则是这个式子 $a \cdot x + b \cdot y = \text{gcd}(a, b)$ 的一组解，同时也满足欧几里德算法的退出条件。

在这段代码中，当 $b=0$ 时，$x$ 被赋值为 $1$，$y$ 被赋值为 $0$，这是因为 $b=0$ 的情况下，最大公约数为 $a$，而这个时候 $x=1, y=0$ 满足这个情况。这样的赋值是为了让递归到最底部时，逐层向上传递正确的解。 

对于递归中反转 $x$ 和 $y$ 的操作，这是因为在辗转相除法的步骤中，需要逐步更新 $x$ 和 $y$ 的值，以便最终得到满足最大公约数的 $x$ 和 $y$。所以，在递归的过程中，交换 $x$ 和 $y$ 的值是为了正确地得到整个连续的求解过程。
*/

int exgcb(int a,int b,int &x,int &y){
    if(!b){
        x=1,y=0;//此时SA成立 就等于 a*x+0*y=a; x=1,y=0就是一组解
        return a;//a和0的最大公约数一定是a
    }
    int d=exgcb(b,a%b,y,x);
    y-=a/b*x;
    return d;//余数继续返回
}
int main(){
    while(n--){
        int a,b,x,y;
        scanf("%d%d",&a,&b);
        exgcb(a,b,x,y);
        printf("%d %d\n",x,y);
}
}
```

## 快速幂
```js
/*
快速求解 
a^k mod p;
*/
int get_mi(int a,int k,int p){
    LL res=1;
    while(k){
        if(k&1) res=res*a%p;
        k>>=1;
        a=(LL)a*a%p;
    }
    return res;
}
```


## gcd辗转相除法
```js
int gcd(int a,int b){
    return b?gcd(b,a%b):a;
}
//这不除完a 然后再处b 如果b=0 true:false
```


## 分解质因数

```js
/*
*/
for(int i=2;i<=n/i;i++){
    if(n%i==0){
        int s=0;
        while(n%i==0){
            n/=i;
            s++;
        }
        printf("%d %d\n",i,s);
        
    }
    
}
if(n>1) printf("%d 1\n",n,1);
puts("");
```

---------
## 线性筛质数
```js
/*
*/
void get_primes(int n){
    for(int i=2;i<=n;i++){
        if(!st[i]) primes[++cnt]=i;
        for(int j=1;primes[j]<=n/i;j++){
            st[primes[j]*i]=true;//primes[j]*i是合数
            if(i%primes[j]==0) break; //假如 primes[j]和i相同 primes[j]是最小质因数 遇到最小质因数就退出
        }
    }
}
```


---

## 并查集[^](#Head)

```js
/*
并查集 将集合合并 连通块的点的数量
*/
int find(int x){
    if(p[x]!=x) p[x]=find(p[x]);
    return p[x];
}
for(int i=1;i<=n;i++) {
    p[i]=i;
    cnt[i]=1;//几乎是相同的 因为cnt一开始每个集合单独的自身节点为1
}
```

---

## 位运算[^](#Head)

```js
/*
*/
// 位运算 第k位数字
n>>k&1
//n的最后一位1 1001001 ->不是最后一个1
lowbit(n)=n&-n
```

---

## Hash开放寻址[^](#Head)
```js
const int null=0x3f3f3f3f,N=20003;
int find(x){
    x=(x%N+N)%N;
    while(h[x]!=null&&h[x]!=x){//// 如果k=N 说明我们这个表格找到头了 此时k=0 说明继续从头开始找 先执行k++
        k++;
        if(k==N) k=0;
    }
    return k;
}
```

---

## T4[^](#Head)

---

## T5[^](#Head)

---

## T6[^](#Head)

# This title

<p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);">Edit by</span><em style="color: rgba(91, 255, 247, 0.65);">@02sDarling</em></p><p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);"><em>2024-04-02-21：14：27（星期二）</em></span></p>
