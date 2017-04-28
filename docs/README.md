# OSO

> 一个小巧、轻量的移动前端 UI 库

OSO（读作/osō/）作为币信 UI 组件的*完整映射*，目的是方便工程师快速推进项目，将更多时间放在业务逻辑，而非调试界面布局与样式，目前这个 UI 库由币信产品设计组进行长期维护。你也可以在项目设计中使用我们维护的 [SKetch 组件](http://ooowaexz7.bkt.clouddn.com/BixinUI%E7%BB%84%E4%BB%B6%E5%BA%93%28V1.2.1-2017.04.18%29.sketch)，通过简单的拖曳组合，快速 Mock 适用于自身业务的通用移动界面，组件绝大部分都已整理为规范的 Symbol，一处修改，多处同步。

# 特性
- 针对币信 UI 组件完整映射(不断完善中)
- 容易使用且无倾入性，可与任意前后端框架配合使用
- 基于 Flexbox 弹性盒的布局方式，适配不同分辨率的移动设备


## 快速开始

### 直接下载
下载 [oso.css](http://ooowaexz7.bkt.clouddn.com/oso.css.zip) 或 [oso.min.css（推荐）](http://ooowaexz7.bkt.clouddn.com/oso.min.css.zip) ，并直接在您的项目引用。

# 组件
## 基础
### Layout布局
![layout](http://ooowaexz7.bkt.clouddn.com/layout%20%E5%B8%83%E5%B1%80.png)
``` html
<!-- oso 使用 Flexbox 盒模型来完成响应式布局 -->
<div class="row">
  <div class="col-12"></div>
</div>

<div class="row">
  <div class="col-6"></div>
  <div class="col-6"></div>
</div>

<div class="row">
  <div class="col-4"></div>
  <div class="col-4"></div>
  <div class="col-4"></div>
</div>

<div class="row">
  <div class="col-3"></div>
  <div class="col-3"></div>
  <div class="col-3"></div>
  <div class="col-3"></div>
</div>

<div class="row">
  <div class="col-2"></div>
  <div class="col-2"></div>
  <div class="col-2"></div>
  <div class="col-2"></div>
  <div class="col-2"></div>
  <div class="col-2"></div>
</div>
```
### Justify 对齐和排列内容
![align](http://ooowaexz7.bkt.clouddn.com/justify%E5%AF%B9%E9%BD%90.png)
``` html
<!-- 你可以方便的使用 Flexbox 来调整内容的对齐和分布方式 -->
<div class="row justify-start">
  <div class="col-3"></div>
  <div class="col-3"></div>
  <div class="col-3"></div>
</div>

<div class="row justify-center">
  <div class="col-3"></div>
  <div class="col-3"></div>
  <div class="col-3"></div>
</div>

<div class="row justify-end">
  <div class="col-3"></div>
  <div class="col-3"></div>
  <div class="col-3"></div>
</div>

<div class="row justify-between">
  <div class="col-3"></div>
  <div class="col-3"></div>
  <div class="col-3"></div>
</div>

<div class="row justify-around">
  <div class="col-3"></div>
  <div class="col-3"></div>
  <div class="col-3"></div>
</div>
```
### Color颜色
![color](http://ooowaexz7.bkt.clouddn.com/%E9%80%9A%E7%94%A8%E8%89%B2%E5%BD%A9%E6%9E%84%E6%88%90.png)
oso 使用纯粹的蓝色作为币信的品牌色，以及其他代表不同情绪的颜色作为辅助色。
### Typography字体
![typography](http://ooowaexz7.bkt.clouddn.com/%E5%AD%97%E4%BD%93%E9%A2%9C%E8%89%B2.png)
### Icon图标
![icon](http://ooowaexz7.bkt.clouddn.com/%E5%A4%A7%E5%9B%BE%E6%A0%87.png)
``` html
<!-- 图标使用方法如下 -->
<i class="icon icon-lg icon-success"></i>
<!-- 成功 -->
<i class="icon icon-lg icon-warn"></i>
<!-- 警告 -->
<i class="icon icon-lg icon-failed"></i>
<!-- 失败 -->
<i class="icon icon-lg icon-process"></i>
<!-- 进行中 -->
<i class="icon icon-lg icon-time"></i>
<!-- 等待 -->
```
### Button按钮
主动作按钮在一个页面中尽量只有一个
![btn-primary](http://ooowaexz7.bkt.clouddn.com/btn-primary.png)
``` html
<!-- 主操作按钮 可操作-->
<a href="javascript:;" class="btn-block btn-primary">主动作按钮 可操作</a>
<!-- 主操作按钮 不可点-->
<a href="javascript:;" class="btn-block btn-primary-disable">主动作按钮 不可点</a>
<!-- 高亮状态是按钮在点击获得 Focus 状态自动切换，无需额外定义 -->
```
一个页面可以有多个次要动作按钮
![btn-normal](http://ooowaexz7.bkt.clouddn.com/btn-normal.png)
``` html
<!-- 次要动作按钮 可操作-->
<a href="javascript:;" class="btn-block btn-normal">次要动作按钮 可操作</a>
<!-- 次要动作按钮 不可点-->
<a href="javascript:;" class="btn-block btn-normal-disable">次要动作按钮 不可点</a>
<!-- 高亮状态是按钮在点击获得 Focus 状态自动切换，无需额外定义 -->
```
用来显示需要警告或不可撤销的操作
![btn-danger](http://ooowaexz7.bkt.clouddn.com/btn-danger.png)
``` html
<!-- 警告动作按钮 可操作-->
<a href="javascript:;" class="btn-block btn-danger">警告按钮 可操作</a>
<!-- 警告动作按钮 不可点-->
<a href="javascript:;" class="btn-block btn-danger-disable">警告按钮 不可点</a>
<!-- 高亮状态是按钮在点击获得 Focus 状态自动切换，无需额外定义 -->
```

## 表单
### InputCell输入列表
#### 单行列表输入
![singleCellInput](http://ooowaexz7.bkt.clouddn.com/singleCellInput2.png)
``` html
<!-- Input cell single -->
    <!-- 单行输入 -->
    <form class="cell-wrapper cell-single">
        <div class="cell" href="javascript:;">
            <div class="cell-title">
                <span>单项输入</span>
                <input type="text" placeholder="占位符">
            </div>
            <div class="cell-unit">
                <span>单位</span>
            </div>
        </div>
    </form>
```
#### 多行列表输入
![singleCellInput](http://ooowaexz7.bkt.clouddn.com/multiCellInput2.png)
``` html
<!-- Input cell multi -->
    <!-- 多行输入 -->
    <!-- 如果你不需要单位，可以直接将 class 名为 "cell-unit" 的 div 直接删去 -->
    <!-- 名为 "cell-desc" 的 div 是表单的补充描述，你可以将它任意放置在列表的上方或下方-->
    <form class="cell-wrapper cell-multi">

        <div class="cell" href="javascript:;">
            <div class="cell-title">
                <span>多项输入</span>
                <input type="text" placeholder="占位符">
            </div>
            <div class="cell-unit">
                <span>单位</span>
            </div>
        </div>
        <div class="cell-separator"></div>

        <div class="cell" href="javascript:;">
            <div class="cell-title">
                <span>选项标题</span>
                <input type="text" placeholder="占位符">
            </div>
            <div class="cell-unit">
                <span>单位</span>
            </div>
        </div>
        <div class="cell-separator"></div>

        <div class="cell" href="javascript:;">
            <div class="cell-title">
                <span>选项标题</span>
                <input type="text" placeholder="占位符">
            </div>
            <div class="cell-unit">
                <span>单位</span>
            </div>
        </div>
        <!-- 表单补充描述项 -->
        <div class="cell-desc">
            <span>此为表单多项输入最后的文字描述</span>
        </div>
    </form>
```
#### 多行文本输入
![textareaInput](http://ooowaexz7.bkt.clouddn.com/%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC%E8%BE%93%E5%85%A5.png)
``` html
<!-- Input cell text-area -->
    <!-- 多行文本输入 -->
    <form class="cell-wrapper cell-single">
        <div class="cell" href="javascript:;">
            <textarea placeholder="占位符">
            </textarea>
        </div>
    </form>
```

### From Group 输入控件
![formGroup](http://ooowaexz7.bkt.clouddn.com/form-group%20%E8%BE%93%E5%85%A5%E7%BB%84%E4%BB%B6.png)
``` html
<!-- 输入控件列表 -->
    <form class="form-group">
      <input name="BTC" type="number" placeholder="价格（CNY）">
      <input name="CNY" type="number" placeholder="数量（BTC）">
      <input name="CNY" type="number" placeholder="总金额（CNY）">
    </form>
```
### ListCell列表
#### 单行列表
![singleListCell](http://ooowaexz7.bkt.clouddn.com/%E5%8D%95%E8%A1%8C%E5%88%97%E8%A1%A8%E5%B8%A6%E6%8F%8F%E8%BF%B0%E4%BF%A1%E6%81%AF%E5%92%8C%E6%AC%A1%E7%BA%A7%E9%A1%B5%E9%9D%A2.png)
``` html
<!-- 单行列表带次级页面 -->
<!-- 如果你不需要描述信息或右箭头，可以直接删去 "cell-value" 中的 span 或 i 元素 -->
    <div class="cell-wrapper cell-single">
        <a class="cell" href="javascript:;">
            <div class="cell-title">
                <span>标题文字</span>
            </div>
            <div class="cell-value">
                <span>描述信息</span>
                <i class="cell-icon icon-arrow-right"></i>
            </div>
        </a>
    </div>
```
#### 单行列表-带icon
![singleListCell](http://ooowaexz7.bkt.clouddn.com/%E5%8D%95%E8%A1%8C%E5%88%97%E8%A1%A8%E5%B8%A6%20icon.png)
``` html
<!-- 单行列表带次级页面和 icon -->
<!-- 如果你不需要描述信息或右箭头，可以直接删去 "cell-value" 中的 span 或 i 元素 -->

  <div class="cell-wrapper cell-single">
      <a class="cell" href="javascript:;">
          <div class="cell-title">
              <img src="http://ooowaexz7.bkt.clouddn.com/image_holder.png" class="rounded">
              <span>单行列表</span>
          </div>
          <div class="cell-value">
              <span>描述信息</span>
              <i class="cell-icon icon-arrow-right"></i>
          </div>
      </a>
  </div>

```
#### 多行列表
![multiListCell](http://ooowaexz7.bkt.clouddn.com/%E5%A4%9A%E8%A1%8C%E5%88%97%E8%A1%A8.png)
``` html
<!-- 多行列表 带描述信息和次级页面 -->
    <div class="cell-wrapper cell-multi">

        <a class="cell" href="javascript:;">
            <div class="cell-title">
                <span>多行列表</span>
            </div>
            <div class="cell-value">
              <span>描述信息</span>
              <i class="cell-icon icon-arrow-right"></i>
            </div>
        </a>
        <div class="cell-separator"></div>

        <a class="cell" href="javascript:;">
            <div class="cell-title">
                <span>列表标题</span>
            </div>
            <div class="cell-value">
              <span>描述信息</span>
              <i class="cell-icon icon-arrow-right"></i>
            </div>
        </a>
        <div class="cell-separator"></div>

        <a class="cell" href="javascript:;">
            <div class="cell-title">
                <span>列表标题</span>
            </div>
            <div class="cell-value">
                <span>描述信息</span>
                <i class="cell-icon icon-arrow-right"></i>
            </div>
        </a>
    </div>
```
#### 多行列表-带icon
![multiListCell](http://ooowaexz7.bkt.clouddn.com/%E5%A4%9A%E8%A1%8C%E5%88%97%E8%A1%A8%E5%B8%A6%20icon.png)
``` html
<!-- 多行列表带次级页面和 icon -->
<!-- 如果你不需要描述信息或右箭头，可以直接删去 "cell-value" 中的 span 或 i 元素 -->

  <div class="cell-wrapper cell-multi">
    <a class="cell" href="javascript:;">
        <div class="cell-title">
            <img src="http://ooowaexz7.bkt.clouddn.com/image_holder.png" class="rounded">
            <span>多行列表</span>
        </div>
        <div class="cell-value">
            <span>描述信息</span>
            <i class="cell-icon icon-arrow-right"></i>
        </div>
    </a>
    <div class="cell-separator"></div>

    <a class="cell" href="javascript:;">
        <div class="cell-title">
            <img src="http://ooowaexz7.bkt.clouddn.com/image_holder.png" class="rounded">
            <span>多行列表</span>
        </div>
        <div class="cell-value">
            <span>描述信息</span>
            <i class="cell-icon icon-arrow-right"></i>
        </div>
    </a>
    <div class="cell-separator"></div>

      <a class="cell" href="javascript:;">
          <div class="cell-title">
              <img src="http://ooowaexz7.bkt.clouddn.com/image_holder.png" class="rounded">
              <span>多行列表</span>
          </div>
          <div class="cell-value">
              <span>描述信息</span>
              <i class="cell-icon icon-arrow-right"></i>
          </div>
      </a>
  </div>
```
#### 单行双标题
![singleListCellMultiText](http://ooowaexz7.bkt.clouddn.com/%E5%8D%95%E8%A1%8C%E5%88%97%E8%A1%A8%E5%8F%8C%E6%A0%87%E9%A2%98.png)
``` html
<!-- 单行列表双标题 -->
<!-- 如果你不需要描述信息或右箭头，可以直接删去 "cell-value" 中的 span 或 i 元素 -->
    <div class="cell-wrapper cell-single">
        <a class="cell" href="javascript:;">
            <div class="cell-title cell-title-multi">
                <div class="cell-title-multi-text">
                    <span>单行列表</span>
                    <span>列表副标题</span>
                </div>
            </div>
            <div class="cell-value">
                <span>描述信息</span>
                <i class="cell-icon icon-arrow-right"></i>
            </div>
        </a>
    </div>
```
#### 单行双标题-带icon
![profileCell](http://ooowaexz7.bkt.clouddn.com/%E4%B8%AA%E4%BA%BA%E8%B5%84%E6%96%99%E5%88%97%E8%A1%A8.png)
``` html
<!-- 单行双标题-带icon -->
<!-- 如果你不需要描述信息或右箭头，可以直接删去 "cell-value" 中的 span 或 i 元素 -->
    <div class="cell-wrapper cell-single">
        <a class="cell cell-multi-has-img" href="javascript:;">
            <div class="cell-title cell-title-multi">
                <img src="http://ooowaexz7.bkt.clouddn.com/image_holder.png" class="rounded">
                <div class="cell-title-multi-text">
                    <span>多行列表</span>
                    <span>多行列表</span>
                </div>
            </div>
            <div class="cell-value">
                <span>描述信息</span>
                <i class="cell-icon icon-arrow-right"></i>
            </div>
        </a>
    </div>
```
#### 单行时间列表
![singleDateCell](http://ooowaexz7.bkt.clouddn.com/%E8%A1%A8%E5%8D%95%E5%A4%B4%E9%83%A8.png)
``` html
<!-- 单行时间列表 -->
    <div class="cell-wrapper cell-single">
        <a class="cell cell-date-head" href="javascript:;">
            <div class="cell-title">
                    <span>04月</span>
                    <span>2017年</span>
            </div>
            <div class="cell-value">
              <p>收入<span>389,23,12.89<i>Bits</i></span>支出<span>188,21,37.12<i>Bits</i></span></p>
            </div>
        </a>
    </div>
```
#### 左右双标题列表-带icon
![multiTitleCell](http://ooowaexz7.bkt.clouddn.com/%E8%B4%A6%E5%8D%95%E5%88%97%E8%A1%A8-%E5%B8%A6%20icon.png)
``` html
<!-- 左右双标题列表 -->
<!-- 如果你不需要描述信息或右箭头，可以直接删去 "cell-value" 中的 span 或 i 元素 -->
<!-- 多行列表 账单列表 -->
    <div class="cell-wrapper cell-multi">
        <a class="cell" href="javascript:;">
            <div class="cell-title cell-title-multi">
                <div class="cell-img-wrapper">
                    <img src="http://ooowaexz7.bkt.clouddn.com/image_holder.png" class="rounded">
                </div>
                <div class="cell-title-multi-bill">
                    <span>红包-来自美美</span>
                    <span>标签</span>
                </div>
            </div>
            <div class="cell-amt">
                <span class="text-blue">+383,231,32.21<small class="unit-sm">Bits</small></span>
                <span>副内容</span>
            </div>
        </a>

        <div class="cell-separator"></div>

        <a class="cell" href="javascript:;">
            <div class="cell-title cell-title-multi">
                <div class="cell-img-wrapper">
                    <img src="http://ooowaexz7.bkt.clouddn.com/image_holder.png" class="rounded">
                </div>
                <div class="cell-title-multi-bill">
                    <span>红包-付给YY</span>
                    <span>标签</span>
                </div>
            </div>
            <div class="cell-amt">
                <span class="text-deep-black">-7,190,712.10<small class="unit-sm">Bits</small></span>
                <span>副内容</span>
            </div>
        </a>
    </div>
```
#### 详情列表
![detailCell](http://ooowaexz7.bkt.clouddn.com/%E8%B4%A6%E5%8D%95%E8%AF%A6%E6%83%85%E5%88%97%E8%A1%A8.png)
``` html
<!-- 详情列表 -->
    <div class="cell-wrapper cell-single">
        <a class="cell cell-head" href="javascript:;">
            <div class="cell-title">
                <span>标签</span>
            </div>
            <div class="cell-value">
                <span>主内容</span>
                <span>副内容</span>
            </div>
        </a>
    </div>

    <div class="cell-wrapper cell-multi">
        <a class="cell cell-tiny" href="javascript:;">
            <div class="cell-title">
                <span>标签一</span>
            </div>
            <div class="cell-value">
                <span>内容一</span>
            </div>
        </a>
        <a class="cell cell-tiny" href="javascript:;">
            <div class="cell-title">
                <span>标签二</span>
            </div>
            <div class="cell-value">
                <span>内容二</span>
            </div>
        </a>
        <a class="cell cell-tiny" href="javascript:;">
            <div class="cell-title">
                <span>标签三</span>
            </div>
            <div class="cell-value">
                <span class="text-blue">查看详情</span>
            </div>
        </a>
    </div>

```
### Checkbox多选框
#### 单行单选项
![singleCellCheckbox](http://ooowaexz7.bkt.clouddn.com/%E5%8D%95%E8%A1%8C%E5%8D%95%E9%80%89%E9%A1%B9.png)
``` html
<!-- Input cell single check box -->
<!-- 单选项 单行 -->
<form class="cell-wrapper cell-single">
    <label class="cell" for="checkBox1">
      <div class="cell-title">
          <span>单行单选项</span>
      </div>
      <div class="check-single">
        <input type="checkbox" id="checkBox1">
        <i class="cell-icon icon-checked"></i>
      </div>
    </label>
</form>
```
#### 多行单选项
![multiCellCheckbox](http://ooowaexz7.bkt.clouddn.com/%E5%A4%9A%E8%A1%8C%E5%8D%95%E9%80%89%E9%A1%B9.png)
``` html
<!-- 多行 单选项   -->
    <form class="cell-wrapper cell-multi">
        <label class="cell" for="checkBox2">
          <div class="cell-title">
              <span>多行单选项</span>
          </div>
          <div class="check-single">
            <input type="checkbox" id="checkBox2">
            <i class="cell-icon icon-checked"></i>
          </div>
        </label>
        <div class="cell-separator"></div>

        <label class="cell" for="checkBox3">
          <div class="cell-title">
              <span>多行单选项</span>
          </div>
          <div class="check-single">
            <input type="checkbox" id="checkBox3">
            <i class="cell-icon icon-checked"></i>
          </div>
        </label>
        <div class="cell-separator"></div>

        <label class="cell" for="checkBox4">
          <div class="cell-title">
              <span>多行单选项</span>
          </div>
          <div class="check-single">
            <input type="checkbox" id="checkBox4">
            <i class="cell-icon icon-checked"></i>
          </div>
        </label>
    </form>
```
## Table列表
![priceTicker](http://ooowaexz7.bkt.clouddn.com/priceTicker.png)
``` html
<!-- 一个典型的 Price Ticker 布局 -->
<div class="table table-price-ticker">
  <table>
    <thead>
      <tr>
        <th></th>
        <th>价格</th>
        <th>数量</th>
      </tr>
    </thead>
    <tbody>
      <tr class="ticker-sell">
        <th>卖5</th>
        <th>7,800</th>
        <th>0.085</th>
      </tr>
      <tr class="ticker-sell">
        <th>卖4</th>
        <th>7,798</th>
        <th>0.128</th>
      </tr>
      <tr class="ticker-sell">
        <th>卖3</th>
        <th>7,787</th>
        <th>0.514</th>
      </tr>
      <tr class="ticker-sell">
        <th>卖2</th>
        <th>7,768</th>
        <th>18.107</th>
      </tr>
      <tr class="ticker-sell">
        <th>卖1</th>
        <th>7,759</th>
        <th>4.000</th>
      </tr>
      <tr class="ticker-deal">
        <th></th>
        <th>7750</th>
        <th></th>
      </tr>
      <tr class="ticker-buy">
        <th>买1</th>
        <th>7,749</th>
        <th>2.010</th>
      </tr>
      <tr class="ticker-buy">
        <th>买2</th>
        <th>7,738</th>
        <th>0.097</th>
      </tr>
      <tr class="ticker-buy">
        <th>买3</th>
        <th>7,725</th>
        <th>0.159</th>
      </tr>
      <tr class="ticker-buy">
        <th>买4</th>
        <th>7,698</th>
        <th>1.382</th>
      </tr>
      <tr class="ticker-buy">
        <th>买5</th>
        <th>7,675</th>
        <th>1.455</th>
      </tr>
    </tbody>
  </table>
</div>
```
## CenterComp居中组件
![centerComp](http://ooowaexz7.bkt.clouddn.com/%E5%B1%85%E4%B8%AD%E7%BB%84%E4%BB%B6.png)
``` html
<!-- 如果你想要使组件在页面中呈献居中效果，请在组件最外层包裹一层 class 为 "center-wrap" 的 div -->
<div class="center-wrapper">
        <i class="icon icon-lg icon-process"></i>

        <div class="gutter-10"></div>

        <p class="text-center text-mid-black">支付状态</p>

        <div class="gutter-10"></div>

        <h3 class="text-center text-num-lg">-1,782.89 Bits</h3>

        <p class="text-center"><span class="badge badge-gray">合0.00178289 BTC</span></p>

        <div class="gutter-20"></div>

        <div class="text-center">
            <div class="profile-mid">
                <img src="http://ooowaexz7.bkt.clouddn.com/image_holder.png" class="rounded">
                <span>用户昵称</span>
            </div>
        </div>

        <div class="gutter-20"></div>

        <p class="text-center text-light-black">创建时间：2016-08-09 16:09</p>

        <div class="gutter-20"></div>

        <p class="text-center"><a href="javascript:;" class="link">文字链接</a></p>
</div>
```
## Tab 切换选项
### 顶部切换栏
![topTab](http://ooowaexz7.bkt.clouddn.com/%E9%A1%B6%E9%83%A8%20tab.png)
``` html
<!-- tab 两项 -->
<ul class="tab">
    <li class="active"><a href="javascript:;">选项一</a></li>
    <li><a href="javascript:;">选项二</a></li>
</ul>

<!-- Gutter -->
<div class="gutter-20"></div>

<!-- tab 三项 -->
<ul class="tab">
    <li class="active"><a href="javascript:;">选项一</a></li>
    <li><a href="javascript:;">选项二</a></li>
    <li><a href="javascript:;">选项三</a></li>
</ul>

<!-- Gutter -->
<div class="gutter-20"></div>

<!-- tab 四项 -->
<ul class="tab">
    <li class="active"><a href="javascript:;">选项一</a></li>
    <li><a href="javascript:;">选项二</a></li>
    <li><a href="javascript:;">选项三</a></li>
    <li><a href="javascript:;">选项四</a></li>
</ul>
```
