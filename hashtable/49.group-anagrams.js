


/**
 * O(n * nlogn / n * n^2)，主要差別在於 js sort 採取哪個排序算法
 * 
 * 第一個想法是使用 hash table 來儲存結果
 * 先將字串排序後，再存入hash table 中，若hash table 已存在該字串key，則將結果 push 到原先的 hash table value 中
 * 由於最後結果的順序可以隨意排，所以直接返回 hash table 的值即可
 */
var groupAnagrams = function(strs) {
  let hashTable = new Map()
  for(let i = 0;i < strs.length;i++){
    const sortedStr = strs[i].split("").sort().join("")
    if(hashTable.has(sortedStr)){
      hashTable.set(sortedStr,[...hashTable.get(sortedStr),strs[i]])
    }else{
      hashTable.set(sortedStr,[strs[i]])
    }
  }
  return [...hashTable.values()]
};