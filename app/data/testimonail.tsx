import { StaticImageData } from "next/image"

type testiProps = {
    quote:string,
    name: string,
    img: string | StaticImageData,
    description: string
    color?: string
    quoteClass?: string
}

export const Test : testiProps[] = [{
     quote:'I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product',
    name:'Mike Torello',
    img:'/assets/img.svg', 
    description:'CEO of Initech',
    
},
    
    
    {   quote:'We have successfully sold digital product and have happy with the results & look forward to using it again this.',
        name:'Richards Hawkins',
        img:'/assets/img2.svg', 
        description:'Marketing Manager of Upnow',
    color:'bg-[#004852]',
     quoteClass:'text-white text-wrap ',
},
    


        {   quote:'Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible .',
            name:'Thomas Magnum',
            img:'/assets/img3.svg', 
            description:'Barellon NSW',},]