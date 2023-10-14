// TODO: Create Tests for this
export function isArrayEmpty(array?: unknown[]) {
    
    // Covers undefined/null
    if (!array) return true

    // Covers length 0
    if (array.length == 0) return true

    return false
}

