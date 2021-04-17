import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { OrangeTheme } from 'theme/Orange';
import { Typography } from '@material-ui/core';

export const BookGroup = () => {
  return (
    <ThemeProvider theme={OrangeTheme}>
      <div className="inline-flex flex-col rounded-lg p-5" style={{background: "linear-gradient(90deg, #006252 0%, #00A287 100%)"}}>
        <Typography variant="h4" className="mb-5 font-bold text-white">Top 10 Book in History</Typography>
        <div className="flex gap-10">
          <Card className="w-48 h-72 rounded-lg">
            <CardActionArea>
              <CardMedia
                className="h-72"
                image="https://s3-alpha-sig.figma.com/img/1a4b/91b3/61f7bc9c847b8c8e9f13a54a523a59d5?Expires=1618790400&Signature=aNs6poVUcZNnOMfFcXiI6hX29GEPSO8OBSRkiSjnFmMBsKllTmq5YY2BvMpKRSj3StOw4-lKuRAuQEUtICFDqy2zXK8o2zNr4b8QBu7xJLvInBJ6W8cz~16POUj54nPul7PK-EkZon2RCQW3PWYqRjVVPhoRU3hfp92nu4FzVoLiaayvldGAQnvd1eaUmk4-r-M03wxbg1ds2jJmdeUQ9cg9rTg-bYv6LUzIgf0idZ443BOPHSHaa6PuBIa~nBt9QSBEdIRh7FFKI3r6yh0EKNJXxrVpRUwEqbxKwwEXzjYtonAnuJ~jqz-epnorrowg8PjoFMSh6mxYmmKo~9fxow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                title="Contemplative Reptile"
              />
              </CardActionArea>
            </Card>
            <Card className="w-48 h-72 rounded-lg">
            <CardActionArea>
              <CardMedia
                className="h-72"
                image="https://s3-alpha-sig.figma.com/img/1a4b/91b3/61f7bc9c847b8c8e9f13a54a523a59d5?Expires=1618790400&Signature=aNs6poVUcZNnOMfFcXiI6hX29GEPSO8OBSRkiSjnFmMBsKllTmq5YY2BvMpKRSj3StOw4-lKuRAuQEUtICFDqy2zXK8o2zNr4b8QBu7xJLvInBJ6W8cz~16POUj54nPul7PK-EkZon2RCQW3PWYqRjVVPhoRU3hfp92nu4FzVoLiaayvldGAQnvd1eaUmk4-r-M03wxbg1ds2jJmdeUQ9cg9rTg-bYv6LUzIgf0idZ443BOPHSHaa6PuBIa~nBt9QSBEdIRh7FFKI3r6yh0EKNJXxrVpRUwEqbxKwwEXzjYtonAnuJ~jqz-epnorrowg8PjoFMSh6mxYmmKo~9fxow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                title="Contemplative Reptile"
              />
              </CardActionArea>
            </Card>
            <Card className="w-48 h-72 rounded-lg">
            <CardActionArea>
              <CardMedia
                className="h-72"
                image="https://s3-alpha-sig.figma.com/img/1a4b/91b3/61f7bc9c847b8c8e9f13a54a523a59d5?Expires=1618790400&Signature=aNs6poVUcZNnOMfFcXiI6hX29GEPSO8OBSRkiSjnFmMBsKllTmq5YY2BvMpKRSj3StOw4-lKuRAuQEUtICFDqy2zXK8o2zNr4b8QBu7xJLvInBJ6W8cz~16POUj54nPul7PK-EkZon2RCQW3PWYqRjVVPhoRU3hfp92nu4FzVoLiaayvldGAQnvd1eaUmk4-r-M03wxbg1ds2jJmdeUQ9cg9rTg-bYv6LUzIgf0idZ443BOPHSHaa6PuBIa~nBt9QSBEdIRh7FFKI3r6yh0EKNJXxrVpRUwEqbxKwwEXzjYtonAnuJ~jqz-epnorrowg8PjoFMSh6mxYmmKo~9fxow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                title="Contemplative Reptile"
              />
              </CardActionArea>
            </Card>
            <Card className="w-48 h-72 rounded-lg">
            <CardActionArea>
              <CardMedia
                className="h-72"
                image="https://s3-alpha-sig.figma.com/img/1a4b/91b3/61f7bc9c847b8c8e9f13a54a523a59d5?Expires=1618790400&Signature=aNs6poVUcZNnOMfFcXiI6hX29GEPSO8OBSRkiSjnFmMBsKllTmq5YY2BvMpKRSj3StOw4-lKuRAuQEUtICFDqy2zXK8o2zNr4b8QBu7xJLvInBJ6W8cz~16POUj54nPul7PK-EkZon2RCQW3PWYqRjVVPhoRU3hfp92nu4FzVoLiaayvldGAQnvd1eaUmk4-r-M03wxbg1ds2jJmdeUQ9cg9rTg-bYv6LUzIgf0idZ443BOPHSHaa6PuBIa~nBt9QSBEdIRh7FFKI3r6yh0EKNJXxrVpRUwEqbxKwwEXzjYtonAnuJ~jqz-epnorrowg8PjoFMSh6mxYmmKo~9fxow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                title="Contemplative Reptile"
              />
              </CardActionArea>
            </Card>
        </div>
      </div>
    </ThemeProvider>
  )
}