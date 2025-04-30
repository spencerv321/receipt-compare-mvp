// ocr.js
import vision from '@google-cloud/vision';

const client = new vision.ImageAnnotatorClient({
  keyFilename: '.receipt-compare-mvp-03ed53d71891.json'   // <- put your real JSON name here
});

async function readReceipt(path) {
  const [result] = await client.textDetection(path);
  console.log(result.textAnnotations[0]?.description || 'No text found');
}

readReceipt('./sample-receipt.jpg').catch(console.error);