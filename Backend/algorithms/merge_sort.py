def merge_sort(array):
    steps = []
    helper(array, 0, len(array) - 1, steps)
    if sorted(array) == array:
        return steps

def helper(array, left, right, steps):
    if (left < right):
        mid  = (left + right) // 2

        helper(array, left, mid, steps)
        helper(array, mid + 1, right, steps)
        merge(array, left, mid, right, steps)

def merge(array, left, mid, right, steps):
    i = mid + 1

    if (array[mid] <= array[i]):
        return
 
    while (left <= mid and i <= right):
        if (array[left] <= array[i]):
            left += 1
        else:
            value = array[i]
            index = i
 
            while (index != left):
                array[index] = array[index - 1]
                index -= 1
 
            array[left] = value
            steps.append({
                    "type" : "swap",
                    "indicies" : (left, i),
                    "new_array" : list(array)
                })
 
            left += 1
            mid += 1
            i += 1

 
