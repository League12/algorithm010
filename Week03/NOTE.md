#学习笔记

> 全排列那题的代码比较
>> 第一段代码:

    ```javascript
        function permute(nums) {
            if (!nums.length) return [];
            const result = [];
            function generate(arr = []) {
                if (arr.length === nums.length) {
                    result.push(arr);
                    return;
                }
                for (let i = 0;i < nums.length;i++) {
                    if (arr.indexOf(nums[i]) >= 0) continue;
                    generate([...arr, nums[i]]);
                }
            }
            generate();
            return result;
        }
    ```
>> 第二段代码

    ```javascript
        function permute(nums) {
            if (!nums.length) return [];
            const arr = [];
            const result = [];
            function generate() {
                if (arr.length === nums.length) {
                    result.push([...arr]);
                    return;
                }
                for (let i = 0;i < nums.length;i++) {
                    if (arr.indexOf(nums[i]) === -1) {
                        arr.push(nums[i]);
                        generate();
                        arr.pop();
                    }
                }
            }
            generate();
            return result;
        }
    ```
> 第二段代码的执行效率比第一段代码的效率高, 
1. 第一段代码在每次执行递归的时候都会以原来的arr为基础复制一个新的出来, 
    在时间和空间上面都加大了执行的开销;
2. 第二段代码有两点不好理解的地方, 第一就是递归终止条件中的 `result.push([...arr])`;
    第二点就是递归调用之后的 `arr.pop()`