array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)


## linear search
def linear_search(value_to_find, array_to_search_through):
    index = None

    for i in range(len(array_to_search_through)):
        if (array_to_search_through[i] == value_to_find):
            index = i
    
    return index


## global search
def linear_search_global(value_to_find, array_to_search_through):
    indices_of_values = []

    if not array_to_search_through:
        return []

    for i in range(len(array_to_search_through)):
        if (array_to_search_through[i] == value_to_find):
            indices_of_values.append(i)

    return indices_of_values