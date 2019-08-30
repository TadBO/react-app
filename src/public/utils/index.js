/**
 * 工具函数集合
 * @type {{}}
 */
const utils = {
    /**
     * 数字千分位逗号分隔
     * @param number
     * @returns {string}
     */
    formatNumber:function(number){
        var integer = parseInt(number);
        if(!isNaN(integer) && integer && (number = number.toString())){
            var dot = number.indexOf('.');
            var decimal = '';
            if(dot > 0){
                decimal = number.substr(dot);
            }
            return integer.toLocaleString().replace(/\.\d+$/, '') + decimal
        }
        return number
    },
}

export default utils;