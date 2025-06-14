export default function StateRules() {
  return (
    <section className="bg-dark mb-20" id="rules">
      <div className="text-center mb-16 mt-20">
        <h2 className="text-4xl font-bold mb-4 font-title glow-text">
          STATE RULES
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8" />
      </div>

      <div className="flex justify-center items-center justify-items-center">
        <div className="frost-glass p-8 rounded-lg glow-border">
          <h3 className="text-3xl font-bold mb-6 text-primary font-title flex items-center gap-2">
            Brothers In Arms Rules
            <img
              alt="brothers in arms"
              className="w-10 h-10 object-cover"
              src="https://gom-s3-user-avatar.s3.us-west-2.amazonaws.com/wp-content/uploads/2025/05/22082953/%E5%85%A8%E5%86%9B%E5%8F%82%E6%88%98.png"
            />
          </h3>
          <p className="text-lg">✅ Gathering tiles open to attack</p>
          <p className="text-lg">
            ⚠️ Max 2 hits per city for NAP6, their academies & FRM
          </p>
          <p className="text-lg">⛔ Don’t attack banners or HQ</p>
          <p className="text-lg">⚠️ Bubble or die</p>
          <p className="text-lg">⛔ Do not ZERO cities</p>
          <p className="text-lg">
            ⛔ No City attacks during events (Bear, Forts, etc)
          </p>
        </div>
      </div>
    </section>
  );
}
