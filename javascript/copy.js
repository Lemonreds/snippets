// JS深浅拷贝

function isDeepType(obj) {
    const type = Object.prototype.toString.call(obj)
    return type === "[object Object]" || type === "[object Array]"
}

function copy(obj, deep = false) {

    if (obj && typeof obj === 'object') {

        const newer = Array.isArray(obj) ? [] : {}

        Object.keys(obj).forEach(key => {
            if (obj.hasOwnProperty(key)) {
                (deep && isDeepType(obj[key])) ?
                newer[key] = copy(obj[key], true): newer[key] = obj[key]
            }
        })
        return newer
    } else return obj
}



const person = {
    name: 'Hello',
    age: 21,
    major: undefined,
    skills: ['write', 'read', 'say'],
    friends: {
        alex: 'man',
        sam: {
            gender: 'man',
            age: 21
        }
    },
    marriage: null
}

const depper = copy(person, true)
const shallow = copy(person, false)

person.age = 20
person.skills.push('coding')
person.friends['alex'] = 'woman'
person.friends['sam']['gender'] = 'woman'

console.log(depper)
console.log(shallow)