# Pythonプログラミング適性検査 想定問題例

# リストの合計
# リスト numbers = [3, 7, 1, 9, 4] の要素の合計を計算して出力してください。
numbers = [3, 7, 1, 9, 4]
total = sum(numbers)
print(total)

# 文字列反転
# 文字列 s = "python" を逆順にして出力してください。
s = "python"

# 偶数の抽出
# リスト nums = [1, 2, 3, 4, 5, 6] から偶数だけを抽出して新しいリストにしてください。
nums = [1, 2, 3, 4, 5, 6]
gusuu = nums

# 最大値・最小値
# リスト values = [15, 22, 8, 19, 31] の最大値と最小値を出力してください。
values = [15, 22, 8, 19, 31]
print(max(values),min(values))
# 階乗計算
# 整数 n = 5 の階乗を計算して出力してください。
n = 5
ans = 5**2
print(ans)

# 文字の出現回数
# 文字列 text = "banana" の中で 'a' が何回出現するか数えて出力してください。
text = "banana"
print(text.count('a'))

# リストの要素を2倍
# リスト numbers = [1, 2, 3, 4] の全要素を2倍した新しいリストを作って出力してください。

for i in range(numbers):
        X = i * 2
        append(ans)
print(ans)

# FizzBuzz
# 1から15までの数字を順に出力し、3の倍数は Fizz、5の倍数は Buzz、3と5両方の倍数は FizzBuzz と出力してください。
for i in range(1,15):
        if i % 3 ==0 and i % 5 ==0:
                print("FizzBuzz")
        elif i % 3 == 0:
                print("Fizz")
        elif i % 5 == 0:
                print("Buzz")
        else:
                print(i)


# 辞書の合計値
# 辞書 scores = {"Alice": 80, "Bob": 75, "Charlie": 90} の点数の合計を出力してください。
scores = {"Alice": 80, "Bob": 75, "Charlie": 90}
ans  = sum(scores)
print(ans)

# リストの重複削除
# リスト items = [1, 2, 2, 3, 4, 4, 5] から重複を削除した新しいリストを作って出力してください。
items = [1, 2, 2, 3, 4, 4, 5]

items = list(set(items))
print(items)