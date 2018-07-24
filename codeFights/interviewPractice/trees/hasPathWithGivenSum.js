//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
  return navigateNode(t,0,s);
}

function navigateNode(node,currentSum, soughtSum) {
  if(node === null) {
    return false;
  }

  let nodeCurrentSum = currentSum+=node.value;
  // base case, we reach a leaf node
  if(node.left === null && node.right === null){
    return nodeCurrentSum === soughtSum;
  }
  else return navigateNode(node.left,nodeCurrentSum,soughtSum) || navigateNode(node.right, nodeCurrentSum, soughtSum);
}

console.log(hasPathWithGivenSum(
  {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
},7
));
