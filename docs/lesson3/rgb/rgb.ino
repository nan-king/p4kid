//全彩LED引脚定义
int RED_PIN = 10;
int GREEN_PIN = 11;
int BLUE_PIN = 12;

//超声波触发和接收引脚定义
int SS_TIGER_PIN = 6;
int SS_ECHO_PIN = 7;

/**
 * 程序初始化
 */
void setup() {
  pinMode(RED_PIN,OUTPUT);
  pinMode(GREEN_PIN,OUTPUT);
  pinMode(BLUE_PIN,OUTPUT);
  
  pinMode(SS_TIGER_PIN,OUTPUT);
  pinMode(SS_ECHO_PIN,INPUT);
}

/**
 * 程序运行循环
 */
void loop() {
  //通过超声波测距传感器探测距离
  float d = getDistance();
  //只信任3厘米到400厘米的数据
  if(d > 3 && d < 400){
    //收到有效信号，更新rgb颜色
    updateColorByDistance(d); 
  }
  //让处理器休息一会
  delay(50);
}


/**
 * 超声波测距函数
 */
float getDistance(){
  //初始化，发送超声波
  digitalWrite(SS_TIGER_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(SS_TIGER_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(SS_TIGER_PIN, LOW);

  //接收返回信号，计算返回信号等待时长
  float duration = pulseIn(SS_ECHO_PIN, HIGH);
  //通过超声波往返时间计算距离
  float distance = (duration / 2) * 0.0343;
  return distance;
}


//平滑处理颜色变换。
int oldColors[] = {0,0,0};
/**
 * 颜色亮度调整
 */
void updateColorByDistance(float distance){
  int color =  (distance -3.0) * (0xfff/ 150.0) ;
  //超过0xfff 记作0xfff
  if(color>4095){
    color=4095;
  }
  //提取出rgb三原色
  int red = color & 0xf;
  int green = (color>>4) &0xf;
  int blue= (color>>8)  &0xf;
  int sum = red+green+blue;
  //对太暗的颜色，手动拉高，避免亮度闪烁
  float rate = max(15.0/(sum+8),1) * (0xff/15.0);
  red *=rate;
  green *=rate;
  blue *=rate;
  //平滑处理
  oldColors[0] = red=(oldColors[0] *1+red)/2;
  oldColors[1] = green=(oldColors[1] *1+green)/2;
  oldColors[2] = blue=(oldColors[2] *1+blue)/2;
  //将rgb颜色数字信号送给对应引脚
  analogWrite(RED_PIN,red);
  analogWrite(GREEN_PIN,green);
  analogWrite(BLUE_PIN, blue);
}
