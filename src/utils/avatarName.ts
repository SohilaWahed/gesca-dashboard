export default function avatarName(fname: string|undefined , lname:string|undefined): string {
   
    const first = fname?.charAt(0) ?? "";
    const second = lname?.charAt(0) ?? "";
    return first + second

} 