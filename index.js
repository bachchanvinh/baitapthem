function whoWouldWin(cat_a, mouse, cat_b) {
    let distanceA = cat_a - mouse
    let distanceB = cat_b - mouse

    if (distanceA < 0) {
        distanceA = -distanceA
    }
    if (distanceB < 0) {
        distanceB = -distanceB
    }
    if (distanceA < distanceB) {
        return "Cat A"
    }
    else if (distanceA > distanceB) {
        return "Cat B"
    }
    else return "Mouse has escaped"
}
// let a =Number(prompt("Cat a"))
// let b =Number(prompt("Mouse"))
// let c= Number(prompt("Cat b"))
// alert(whoWouldWin(a,b,c))





let array = [[0, 2, 3, 4, 5], [0, 1], [0, 6], [1, 9, 8, 7, 10], [10, 11], [11, 12], [12, 13]]

console.log([[0, 2, 3, 4, 5], [0, 1], [0, 6], [1, 9, 8, 7, 10], [10, 11], [11, 12], [12, 13]])
let F1 = []
let F2 = []
let F3 = []
let F4 = []
function covid19(arr) {

    for (let i = arr.length - 1; i > -1; i--) {
        if (arr[i].indexOf(0) > -1) {
            arr[i].splice(arr[i].indexOf(0), 1)
            for (let j = arr[i].length - 1; j >= 0; j--) {
                F1.push(arr[i][j])
            }
            arr.splice(i, 1)
        }
        for (j = 0; j < F1.length; j++) {
            for (let jj = F2.length - 1; jj > j; jj--) {
                if (F1[j] == F1[jj]) {
                    F1.splice(jj, 1)///xoa phan tu giong nhau
                }
            }
        }
    }
    //---------------------------F1 done -----------------------------------
    for (i = arr.length - 1; i > -1; i--) {
        for (j = 0; j < F1.length; j++) {
            if (arr[i].indexOf(F1[j]) > -1) {
                for (jj = 0; jj < arr[i].length; jj++) {
                    F2.push(arr[i][jj])
                    //arr[i].splice(jj,1)
                }
                arr.splice(i, 1)
            }
        }
    }
    for (i = F2.length - 1; i > -1; i--) {
        for (j = 0; j < F1.length; j++) {
            if (F2[i] == F1[j]) {
                F2.splice(i, 1)// Xoa phan tu cua F khac
            }
        }
    }
    for (j = 0; j < F2.length; j++) {
        for (let jj = F2.length - 1; jj > j; jj--) {
            if (F2[j] == F2[jj]) {
                F2.splice(jj, 1)///xoa phan tu giong nhau
            }
        }
    }
    //----------------------------F2 done ---------------------------------------
    for (i = arr.length - 1; i > -1; i--) {
        for (j = 0; j < F2.length; j++) {
            if (arr[i].indexOf(F2[j]) > -1) {
                for (jj = 0; jj < arr[i].length; jj++) {
                    F3.push(arr[i][jj])
                }
                arr.splice(i, 1)
            }
        }
    }
    for (i = F3.length - 1; i > -1; i--) {
        for (j = 0; j < F2.length; j++) {
            if (F3[i] == F2[j]) {
                F3.splice(i, 1)// Xoa phan tu cua F khac
            }
        }
    }
    for (j = 0; j < F3.length; j++) {
        for (let jj = F3.length - 1; jj > j; jj--) {
            if (F3[j] == F3[jj]) {
                F3.splice(jj, 1)///xoa phan tu giong nhau
            }
        }
    }
    //----------------------------F3 done-------------------------------------
    for (i = arr.length - 1; i > -1; i--) {
        for (j = 0; j < F3.length; j++) {
            if (arr[i].indexOf(F3[j]) > -1) {
                for (jj = 0; jj < arr[i].length; jj++) {
                    F4.push(arr[i][jj])
                }
                arr.splice(i, 1)
            }
        }
    }
    for (i = F4.length - 1; i > -1; i--) {
        for (j = 0; j < F3.length; j++) {
            if (F4[i] == F3[j]) {
                F4.splice(i, 1)// Xoa phan tu cua F khac
            }
        }
    }
    for (j = 0; j < F4.length; j++) {
        for (let jj = F4.length - 1; jj > j; jj--) {
            if (F4[j] == F4[jj]) {
                F4.splice(jj, 1)///xoa phan tu giong nhau
            }
        }
    }
}
// covid19(array)
// console.log(array)
// console.log(F1)
// console.log(F2)
// console.log(F3)
// console.log(F4)




function saleMarchendise(socks, sizes) {
    let saleable = []
    for (let i = 0; i < sizes.length; i++) {
        let count = 0
        for (let j = 0; j < socks.length; j++) {
            if (sizes[i] == socks[j]) {
                count += 1
            }
        }
        if (count % 2 != 0) {
            saleable.push((count - 1) / 2)
        }
        else saleable.push(count / 2)
    }
    return saleable
}
let sock = [1, 2, 3, 4, 1, 2]
let size = [1, 2, 4]
// console.log(saleMarchendise(sock, size))




function factorialDivisible(n) {
    let L = 1
    for (let i = 1; i < n; i++) {
        L = L * i
    }
    L = L + 1
    if (L % n == 0) {
        return ` Chia het cho ${n}`
    }
    else return `Khong chia het cho ${n}`
}

// console.log(factorialDivisible(4))