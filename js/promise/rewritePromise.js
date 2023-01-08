function Promise(func){
    //初始化
    this.promiseState = "pending"
    this.promiseResult = null
    this.callF = []

    const self = this

    // 可以改变状态且设置结果值
    function resolve(data){
        // console.log("success")
        if(self.promiseState !== "pending") return
        self.promiseState = "fulfilled"
        self.promiseResult = data
        self.callF.forEach(value=>{
            if(value.onRes){
                value.onRes(self.promiseResult)
            }
        })
        
    }
    function reject(data){
        // console.log("fail")
        if(self.promiseState !== "pending") return
        self.promiseState = "rejected"
        self.promiseResult = data
        self.callF.forEach(value=>{
            if(value.onRej){
                value.onRej(self.promiseResult)
            }
        })
    }
    //执行器函数是同步调用的
    try{
        func(resolve, reject)
    }catch(err){
        reject(err)
    }
}

Promise.prototype.then = function(onResolved, onRejected){
    return new Promise((res, rej)=>{
        if(this.promiseState === "fulfilled"){
            try{
                let result = onResolved(this.promiseResult)
                // console.log(result)
                if(result instanceof Promise){
                    result.then(value=>{
                        res(value)
                    }, reason=>{
                        rej(reason)
                    })
                }else{
                    res(result)
                }
            }catch(e){
                rej(e)
            }
            
        }
        if(this.promiseState === "rejected"){
            try{
                let result = onRejected(this.promiseResult)
                if(result instanceof Promise){
                    result.then(value=>{
                        res(value)
                    }, reason=>{
                        rej(reason)
                    })
                }else{
                    res(result)
                }
            }catch(e){
                rej(e)
            }
            
        }
        if(this.promiseState === "pending"){
            //保存回调函数
            this.callF.push({
                onRes: onResolved,
                onRej: onRejected
            })
        }
    })
    
}