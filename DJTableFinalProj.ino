// set constants for buttons
const int But1 = 2;
const int But2 = 4;
const int LedR = 6;
const int LedB = 8;

void setup() {
  Serial.begin(9600);
  pinMode(But1, INPUT);
  pinMode(But2, INPUT);
  pinMode(LedR, OUTPUT);
  pinMode(LedB, OUTPUT);
}

void loop() {

int valB1 = digitalRead(But1);
int valB2 = digitalRead(But2);

if (Serial.available() > 0) {
    int byteIn = Serial.read();
    if (byteIn == 10) {
      Serial.flush();
      Serial.println(String(valB1) + "," + valB2);
    }
}

if (valB1 == 1 && valB2 == 0) {
      digitalWrite(LedR, LOW);
      if (valB1 == HIGH){
      analogWrite(LedB, 255);
      } else {
        analogWrite(LedB, 0);
      }
    } else if (valB2 == 1) {
      digitalWrite(LedR, HIGH);  
      digitalWrite(LedB, LOW);
    }

delay(10);

}
