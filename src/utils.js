export const pi = 3.14;

export function piValue()
{
    return pi;
}

export function area(r)
{
    return pi*r*r
}
function areaRectangle(length, breadth)
{
    return 2 * length * breadth
}


export default function coding(codername)
{
    return codername
}

//default will never participate in destructuring
//only one default function is allowed

export {areaRectangle}

