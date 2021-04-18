import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Image from 'material-ui-image'

export const OrderList = () => {
    return (
        <div className="bg-white flex flex-col rounded-lg p-6 w-1/2">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-6">
                    <Image
                        imageStyle={{
                            height: 100, 
                            width: 70,
                            position: "unset",
                            borderRadius: "3px"
                        }}
                        style={{
                            position: "unset",
                            padding: "0"
                        }}
                        aspectRatio={(16/9)}
                        src="https://s3-alpha-sig.figma.com/img/a1d8/c812/6abb04e1ecbc36737fdb211b67f3b61a?Expires=1619395200&Signature=UM40ujtujcnYJOWAMZf74omqjWvtS-3qAiG9vy4xVBcIj6uMMzF4sNwc78sLurvgHNbTsI3Jdw5r5n-yPR~ruv5Aa3zX37qG2LBjCZDnUBc0PqSK9YnZzk3~bKxNTnag63UygdrUSubTxZxPz6ZMk2oWLdzXU5AEJWEAbd4L6fmrN49UU7CGBBs-h1iDVPdSVQ6rgY9e5gPzTDiwWE0V6e273qJ-h5w6IYt1MezjkKmvu1YtrI34COqkzwYzLZc0VLul5AfydiBaDY5-RicliAMdx~4A76MFKYIqOj-HfXZvfzWPdLixUVNyVwhIuEq1WS8zV8p5rf~7SoqtgY9tgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
                        />
                    <div>
                        <Typography className="text-gray-900 text-lg font-bold">Steve Jobs</Typography>
                        <span className="inline-grid grid-flow-col items-center">
                            <Typography className="text-gray-400 text-sm">Author:&nbsp;</Typography>
                            <Typography className="text-gray-600 text-sm font-bold">Steve Jobs</Typography>
                        </span>
                        <span className="grid grid-flow-col items-center mt-1">
                            <Typography className="text-gray-400 text-sm">ISBN:&nbsp;</Typography>
                            <Typography className="text-gray-600 text-sm font-bold">987-912347-1349</Typography>
                        </span>
                    </div>    
                </div>
                <div>
                    <Typography>Birr 115.00</Typography>    
                </div>  
                <div className="mr-28">
                    sdfsf
                </div>    
            </div>
            <Divider className="m-5" light />
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-6">
                    <Image
                        imageStyle={{
                            height: 100, 
                            width: 70,
                            position: "unset",
                            borderRadius: "3px"
                        }}
                        style={{
                            position: "unset",
                            padding: "0"
                        }}
                        aspectRatio={(16/9)}
                        src="https://s3-alpha-sig.figma.com/img/a1d8/c812/6abb04e1ecbc36737fdb211b67f3b61a?Expires=1619395200&Signature=UM40ujtujcnYJOWAMZf74omqjWvtS-3qAiG9vy4xVBcIj6uMMzF4sNwc78sLurvgHNbTsI3Jdw5r5n-yPR~ruv5Aa3zX37qG2LBjCZDnUBc0PqSK9YnZzk3~bKxNTnag63UygdrUSubTxZxPz6ZMk2oWLdzXU5AEJWEAbd4L6fmrN49UU7CGBBs-h1iDVPdSVQ6rgY9e5gPzTDiwWE0V6e273qJ-h5w6IYt1MezjkKmvu1YtrI34COqkzwYzLZc0VLul5AfydiBaDY5-RicliAMdx~4A76MFKYIqOj-HfXZvfzWPdLixUVNyVwhIuEq1WS8zV8p5rf~7SoqtgY9tgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
                        />
                    <div>
                        <Typography className="text-gray-900 text-lg font-bold">Steve Jobs</Typography>
                        <span className="inline-grid grid-flow-col items-center">
                            <Typography className="text-gray-400 text-sm">Author:&nbsp;</Typography>
                            <Typography className="text-gray-600 text-sm font-bold">Steve Jobs</Typography>
                        </span>
                        <span className="grid grid-flow-col items-center mt-1">
                            <Typography className="text-gray-400 text-sm">ISBN:&nbsp;</Typography>
                            <Typography className="text-gray-600 text-sm font-bold">987-912347-1349</Typography>
                        </span>
                    </div>    
                </div>
                <div>
                    <Typography>Birr 115.00</Typography>    
                </div>  
                <div className="mr-28">
                    sdfsf
                </div>    
            </div>
            <Divider className="m-5" light />
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-6">
                    <Image
                        imageStyle={{
                            height: 100, 
                            width: 70,
                            position: "unset",
                            borderRadius: "3px"
                        }}
                        style={{
                            position: "unset",
                            padding: "0"
                        }}
                        aspectRatio={(16/9)}
                        src="https://s3-alpha-sig.figma.com/img/a1d8/c812/6abb04e1ecbc36737fdb211b67f3b61a?Expires=1619395200&Signature=UM40ujtujcnYJOWAMZf74omqjWvtS-3qAiG9vy4xVBcIj6uMMzF4sNwc78sLurvgHNbTsI3Jdw5r5n-yPR~ruv5Aa3zX37qG2LBjCZDnUBc0PqSK9YnZzk3~bKxNTnag63UygdrUSubTxZxPz6ZMk2oWLdzXU5AEJWEAbd4L6fmrN49UU7CGBBs-h1iDVPdSVQ6rgY9e5gPzTDiwWE0V6e273qJ-h5w6IYt1MezjkKmvu1YtrI34COqkzwYzLZc0VLul5AfydiBaDY5-RicliAMdx~4A76MFKYIqOj-HfXZvfzWPdLixUVNyVwhIuEq1WS8zV8p5rf~7SoqtgY9tgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
                        />
                    <div>
                        <Typography className="text-gray-900 text-lg font-bold">Steve Jobs</Typography>
                        <span className="inline-grid grid-flow-col items-center">
                            <Typography className="text-gray-400 text-sm">Author:&nbsp;</Typography>
                            <Typography className="text-gray-600 text-sm font-bold">Steve Jobs</Typography>
                        </span>
                        <span className="grid grid-flow-col items-center mt-1">
                            <Typography className="text-gray-400 text-sm">ISBN:&nbsp;</Typography>
                            <Typography className="text-gray-600 text-sm font-bold">987-912347-1349</Typography>
                        </span>
                    </div>    
                </div>
                <div>
                    <Typography>Birr 115.00</Typography>    
                </div>  
                <div className="mr-28">
                    sdfsf
                </div>    
            </div>

        </div>
    )
}