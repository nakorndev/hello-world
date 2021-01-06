# Hello, world!

> [https://nakorncode.github.io/hello-world/](https://nakorncode.github.io/hello-world/) Repository สำหรับมือใหม่เพื่อการฝึกฝนใช้งาน Pull requests ผ่าน GitHub

สามารถติดตามคอร์สเรียนฟรีเพิ่มเติมสำหรับโปรแกรมเมอร์ฝึกหัดได้ที่ [https://www.facebook.com/nakorncode](https://www.facebook.com/nakorncode)

## วิธีเรียนกับเรา

เพื่อการเรียนที่ดีกว่าเดิม สามารถเริ่มต้นได้ผ่านกลุ่มเรียนรู้ฟรีที่ [https://www.facebook.com/groups/nakorncode.basic/](https://www.facebook.com/groups/nakorncode.basic/) โดยเนื้อหาเกี่ยวกับ Git นั้นจะอยู่ส่วนล่างๆของเนื้อหาทั้งหมด

### Repository นี้คืออะไร

Repository (โปรเจค) นี้จะเป็นการนำชื่อข้อมูลทุกๆ Contributors (ผู้ร่วมพัฒนา) จากไฟล์ [`./data/*.yml`](https://github.com/nakorncode/hello-world/tree/main/data) ทั้งหมดมาแสดงผล ซึ่งก็จะเป็นเพียงแค่ทดลองนำเข้าข้อมูลโปรไฟล์เล็กน้อยมายัง Repository คนอื่นผ่านการ [Pull requests](https://github.com/nakorncode/hello-world/pulls) และจะมีบอทคอยตรวจสอบให้ภายใน 20 วินาทีว่าเนื้อหาผ่านหรือไม่ (ถ้าเซิร์ฟเวอร์ฟรีน้อยๆจาก [Google Cloud](https://cloud.google.com/) มันไม่ล่มน่ะนะ)

หากตรงตามสเปคบอทก็จะทำการ Merge ให้อัตโนมัติ หรือหากมีส่วนไหนผิดก็จะมีคำแนะนำให้แก้ไขเล็กๆน้อยๆ จากนั้นเนื้อหาจะถูกทำงานผ่าน Workflows ของ [GitHub Actions](https://github.com/nakorncode/hello-world/actions) เพื่อสร้างหน้าเว็บใหม่พร้อมกับชื่อของคุณ และรูปประจำตัวแบบสุ่มที่พัฒนาโดย [DiceBear/avatars](https://github.com/DiceBear/avatars)

### สเปคการแก้ไข

ในการขอให้ Merge ผ่านได้ จะมีเงื่อนไขดังนี้

- ไฟล์ใหม่ต้องตั้งเป็นชื่อ `./data/<your-github-username>.yml` เท่านั้น เช่น [`./data/nakorndev.yml`](https://github.com/nakorncode/hello-world/blob/main/data/nakorndev.yml)
- ไม่อนุญาตให้แก้ไขอย่างอื่นนอกจากไฟล์ `.yml` ที่กำหนด และชื่อไฟล์ต้องถูกต้อง
- เอกสายภายในจะต้องมีการ **เว้นบรรทัด** ในบรรทัดสุดท้ายให้ถูกต้องด้วย
- ข้อมูลทั้งหมดจะปลอมหรือไม่กรอกบางอย่างก็ได้ สำหรับผู้ที่ต้องการปิดข้อมูลส่วนตัว
- ข้อมูลภายในสามารถคัดลอกตามนี้เพื่อไปใช้งานได้

```yml
full_name: <ชื่อจริง ไม่เกิน 40 ตัวอักษร>
nickname: <ชื่อเล่น ไม่เกิน 10 ตัวอักษร>
gender: <เพศ จำเป็นต้องระบุ โดยใช้เฉพาะคำว่า "male" หรือ "female" เท่านั้น>
birth_year: <ระบุปีเกิด ได้ตั้งแต่ 0 จนถึงปีปัจจุบันเป็นตัวเลข หรือเว้นว่างไว้>
message: <ข้อความใดๆก็ได้ แต่ก็ควรมีมารยาทเนอะ>
```

> ดูตัวอย่างเพิ่มเติมได้ที่ไฟล์ [`./data/nakorndev.yml`](https://github.com/nakorncode/hello-world/blob/main/data/nakorndev.yml)

### ขั้นตอนแนะนำการเริ่ม Pull request

- เริ่มต้น ให้ทำการกด `Fork` มุมขวาบนของเว็บ เพื่อคัดลอกทั้ง Repository นี้ไปเป็นของเรา
- ดำเนินการ `git clone` ไปยังเครื่องของคุณ
- จากนั้นเพิ่มไฟล์ตามชื่อ `./data/<your-github-username>.yml` ของคุณที่ถูกต้อง เช่น `./data/myuser123.yml`
- คัดลอกรูปแบบข้อมูลจากคนอื่น จากนั้นเปลี่ยนให้เป็นของเราเองตามสเปค หากเกินสเปคจะทำให้ Merge ไม่ผ่านได้
- เสร็จแล้ว `git add` `git commit` และ `git push` ตามลำดับมาที่ Branch ใดๆก็ได้
- กลับมาที่หน้า [nakorncode/hello-world](https://github.com/nakorncode/hello-world) ไปที่แท็ก [Pull requests](https://github.com/nakorncode/hello-world/pulls)
- เลือก [New pull request](https://github.com/nakorncode/hello-world/compare) ปุ่มสีเขียว
- ให้เลือก Compare จาก `base repository: nakorncode/hello-world` `base: main` ⬅ `head repository: <your-github-username>/hello-world` `compare: <your-branch>`
  - หากขั้นตอนนี้ไม่ขึ้นให้เลือก ให้กดปุ่ม **compare across forks** ที่เป็นลิงก์แบบข้อความ
- จากนั้นให้ระบุข้อมูลที่ต้องการใดๆก็ได้ และดำเนินการต่อ
- รอที่หน้า Pull requests ที่เพิ่งสร้างมาประมาณไม่เกิน 30 วินาที จะมีบอทตอบกลับว่าผ่านหรือไม่อย่างไร
  - หากขั้นตอนนี้ไม่ได้รับการตอบกลับจากบอท หรือมีปัญหาพร้อมกับข้อความ Error เกิดขึ้น กรุณาติดต่อผ่าน [Facebook](https://www.facebook.com/nakorncode)
