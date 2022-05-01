# AOT-API

API criada em NodeJs sobre o anime "Attack on Titan".

## Personagens

Para fazer a requisição de todos os personagens utilize o endpoint : https://aot-api.herokuapp.com/characters ;

Para fazer a requisição de um personagem especifico utilize o endpoint https://aot-api.herokuapp.com/characters/{id} .

Em caso de sucesso, a response sera a seguinte :

```json
{
  "id":1,
  "name":"Eren",
  "surname":"Yeager/Jaeger",
  "affiliation":"Survey Corps",
  "img":
   {
     "pre":"https://github.com/ClaudioDev233/AOT-API/blob/main/images/characters/eren850.png?raw=true",
     "pos":"https://github.com/ClaudioDev233/AOT-API/blob/main/images/characters/eren854.png?raw=true"
   } 
}


```
## Titãs

Para fazer a requisição de todos os titãs utilize o endpoint : https://aot-api.herokuapp.com/titans ;

Para fazer a requisição de um titã especifico utilize o endpoint https://aot-api.herokuapp.com/titans/{id} .

Em caso de sucesso, a response sera a seguinte :

```json
{
  "id":1,
  "name":"Attack Titan",
  "holder":"Eren Jaeger",
  "img":"https://github.com/ClaudioDev233/AOT-API/blob/main/images/titans/attackTitan.png?raw=true"
}


```



