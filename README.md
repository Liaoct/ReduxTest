# ReduxTest
redux unit test with mocha

本项目主要用于测试以下两种写法的差异：

    const finalCreateStore = compose.apply(this, middlewares.map(md => applyMiddleware(md)))(createStore);
    const finalCreateStore = applyMiddleware(...middlewares)(createStore);
    
从而说明第一种写法的不靠谱性。

## 使用方法 ##

安装依赖：

    npm install
    
运行mocha测试：

    npm test
    
修改store.js文件中，分别注释这两行代码，再运行。

查看两种写法在命令行中的输出差异。