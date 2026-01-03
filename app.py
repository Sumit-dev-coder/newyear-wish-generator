from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/create")
def create():
    return render_template("create.html")

@app.route("/wish/<name>/<relation>/<profession>/<tone>")
def wish(name, relation, profession, tone):

    wishes = {
        "motivational": (
            f"🎆 Wishing {name}, a wonderful {relation} and an inspiring {profession}, "
            f"a truly motivational New Year filled with confidence, growth, and unstoppable energy. "
            f"May this year push you beyond your limits, help you achieve your goals, "
            f"and turn every challenge into a powerful opportunity for success and self-belief."
        ),

        "emotional": (
            f"🎆 Wishing {name}, a cherished {relation} and a dedicated {profession}, "
            f"a deeply emotional and beautiful New Year. "
            f"May your days be filled with love, peace, and meaningful moments. "
            f"May this year heal old wounds, strengthen bonds, and surround you with warmth, "
            f"kindness, and heartfelt happiness wherever life takes you."
        ),

        "fun": (
            f"🎆 Wishing {name}, an awesome {relation} and a fantastic {profession}, "
            f"a super fun and joyful New Year ahead! "
            f"May your year be packed with laughter, exciting adventures, great memories, "
            f"unexpected surprises, and endless reasons to smile. "
            f"Stay crazy, stay happy, and make this year unforgettable!"
        ),

        "professional": (
            f"🎆 Wishing {name}, a respected {relation} and a skilled {profession}, "
            f"a highly successful and professional New Year. "
            f"May this year bring new opportunities, strong achievements, and consistent growth. "
            f"May your hard work be recognized, your decisions be impactful, "
            f"and your career reach new heights of excellence and stability."
        ),
    }

    message = wishes.get(tone, wishes["motivational"])

    return render_template(
        "wish.html",
        message=message
    )

if __name__ == "__main__":
    app.run(debug=False)
