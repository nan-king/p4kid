//全彩LED引脚定义
int RED_PIN = 10;
int GREEN_PIN = 11;
int BLUE_PIN = 12;

//超声波触发和接收引脚定义
int TIGER_PIN = 6;

//程序初始化
void setup() {
  Serial.begin(9600);
  pinMode(RED_PIN,OUTPUT);
  pinMode(GREEN_PIN,OUTPUT);
  pinMode(BLUE_PIN,OUTPUT);
  
  pinMode(TIGER_PIN,INPUT);
  updateColor();
}

//程序运行循环
int current = 0;
int colors[] = {200,0,0};
void loop() {
  int flag = 0;
  do{
    flag = digitalRead(TIGER_PIN);
    //Serial.print("tiger:");
    //Serial.println(flag,HEX);
    delay(1);
  }while(flag);
  int next = (current+1) %3;
  colors[current] = 255;
  colors[next] = 0;
  for(int i = 0;i<255;i++){
    colors[current]-=1;
    colors[next] +=1;
    updateColor();
    delay(10);
  }
  Serial.print("color:");
  //long c = (((colors[0]<<8) |colors[1])<<8)|colors[2] ;

  Serial.println( colors[0],HEX);
  Serial.println( colors[1],HEX);
  Serial.println( colors[2],HEX);
  current = next;
  updateColor();
  delay(2050);
}





//颜色亮度调整
void updateColor(){

  float rate = 0.7;
  //提取出rgb三原色
  int red = 255-colors[0]*rate;
  int green = 255-colors[1]*rate;
  int blue= 255-colors[2]*rate;
  //将rgb颜色数字信号送给对应引脚
  analogWrite(RED_PIN,red);
  analogWrite(GREEN_PIN,green);
  analogWrite(BLUE_PIN, blue);
}
