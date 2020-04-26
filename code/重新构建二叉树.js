/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length==0||vin.length==0){
                return null;
        };
   var root = vin.indexOf(pre[0]);
    var left,right;
    left =  vin.slice(0,root);
    right = vin.slice(root+1);
    return{
        val:pre[0],
        left:reConstructBinaryTree(pre.slice(1,root+1),left),
        right:reConstructBinaryTree(pre.slice(root+1),right)
    };
}
