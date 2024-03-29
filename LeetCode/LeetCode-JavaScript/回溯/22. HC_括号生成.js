// 22. 括号生成
const generateParenthesis1 = n => {
    const res = [];
    const dfs = (left, right, str) => {
        if (left === n && right === n) {
            res.push(str);
            return;
        }
        if (left < n) {
            dfs(left + 1, right, str + '(');
        }
        if (right < left) {
            dfs(left, right + 1, str + ')');
        }
    };
    dfs(0, 0, '');// 0个左括号, 0个右括号, 空字符串
    return res;
};

const generateParenthesis = n => {
    if (!n) return [''];
    const res = [];
    const dfs = (str, left, right) => {
        // 去除无效的括号组合
        // 左括号数量不能过半
        // 右括号数量不能超过左括号，因为右括号不能在对应的左括号之前出现
        if (left > n || right > left) return;
        // 生成了n对有效括号，放入res数组
        if (str.length === 2 * n) {
            res.push(str);
            return;
        }
        // 下一个追加左括号，左括号数量+1
        dfs(`${str}(`, left + 1, right);
        // 下一个追加右括号，右括号数量+1
        dfs(`${str})`, left, right + 1);
    };
    dfs('', 0, 0);
    return res;
};

