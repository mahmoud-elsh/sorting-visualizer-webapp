def quick_sort(array):
    steps = []
    helper(array, 0, len(array) - 1, steps)
    if sorted(array) == array:
        return steps

def partition(array, low, high, steps):
    pivot = array[high]

    i = low - 1

    for j in range(low, high):
        if array[j] <= pivot:
            i += 1

            temp = array[i]
            array[i] = array[j]
            array[j] = temp

            steps.append({
                    "type" : "swap",
                    "indicies" : (i, j),
                    "new_array" : list(array)
                })

    temp = array[i + 1]
    array[i + 1] = array[high]
    array[high] = temp

    steps.append({
            "type" : "swap",
            "indicies" : (i, high),
            "new_array" : list(array)
                })

    return i + 1


def helper(array, low, high, steps):
    if low < high:

        part = partition(array, low, high, steps)

        helper(array, low, part - 1, steps)
        helper(array, part + 1, high, steps)
